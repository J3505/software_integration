import { useNavigation } from "../config/js/navigation";
import { useState } from 'react';
import Header from "./Main_components/Header";
import Ingresar from "./Inputs/Ingresar";
import { TableInput } from "./Tabla/TableInput";






const CreateInform = () => {
  const { dinamickNavigate } = useNavigation();
  // const [openModal, SetOpenModal] = useState(false);


  const [isEditing, setIsEditing] = useState(false);

  // Estados para los textos
  const [fecha, setFecha] = useState('Lima, 30 de Diciembre de 2023');
  const [gerente, setGerente] = useState('Carlos Kuang');
  const [empresa, setEmpresa] = useState('GERENCIA DE RIESGOS ASESORES Y CORREDORES DE SEGUROS S.R.L.');
  const [meses, setMeses] = useState('Octubre, Noviembre y Diciembre 2023');
  const [servicio, setServicio] = useState('Servicio de mejoras al Software Cotizador de Seguros Vehiculares con Microservicios en Kubernetes y Google Cloud Platform');
  const [facturaFecha, setFacturaFecha] = useState('XX-XX-XXXX');
  const [gerenteFirma, setGerenteFirma] = useState('Freddy Bendezu');
  const [empresaFirma, setEmpresaFirma] = useState('SOFTWARE INTEGRATION CONSULTING E.I.R.L.');
  const [facturaNum, setFacturaNum] = useState('XX-XX-XXXX - Nro. E001-XX');
  const [direccion, setDireccion] = useState('Av. Paseo de la República 1810 Lince');
  const [telefono, setTelefono] = useState('51 959689277');

  // Función para imprimir el informe
  const handlePrint = () => {
    window.print();
  };


  return (
    < >

      <Header />
      <div className="h-[20%] border" >
        < Ingresar />
        < TableInput />
      </div>

      <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer" onClick={() => dinamickNavigate('main')}>volver</button>

      {/* <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer" onClick={()=>dinamickNavigate('')}>Login</button> */}

      {/* Botones de imprimir y editar */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer"
        >
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
        <button
          onClick={handlePrint}
          className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer"
        >
          Imprimir
        </button>
      </div>

      <div className="p-12 max-w-3xl mx-auto bg-white border border-gray-300 shadow-md">


        {/* Hoja de impresión */}
        {/* style={{ minHeight: '29.7cm', maxWidth: '21cm' }} */}
        <div className="a4 p-8 bg-white text-justify" >


          {/* Fecha */}
          {isEditing ? (
            <input
              type="text"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full text-right text-lg mb-8 bg-transparent border-b border-gray-400 focus:outline-none"
            />
          ) : (
            <p className="text-right text-lg mb-8">{fecha}</p>
          )}

          {/* Encabezado */}
          <h2 className="text-lg font-bold mb-4">
            Señores &nbsp;
            {isEditing ? (
              <input
                type="text"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="w-full text-left bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{empresa}</span>
            )}
          </h2>

          <h3 className="mb-6">
            {isEditing ? (
              <input
                type="text"
                value={gerente}
                onChange={(e) => setGerente(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{gerente}</span>
            )}
            - Gerente General
          </h3>

          <p>Presente. -</p>

          <p className="my-4">
            El presente informe permite conocer las actividades realizadas por Software Integration Consulting durante los meses de
            {isEditing ? (
              <input
                type="text"
                value={meses}
                onChange={(e) => setMeses(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{meses}</span>
            )}
            como parte del <strong>"</strong>
            {isEditing ? (
              <textarea
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{servicio}</span>
            )}
            <strong>"</strong>. Este informe sustenta en detalle la liquidación de la factura emitida el
            {isEditing ? (
              <input
                type="text"
                value={facturaFecha}
                onChange={(e) => setFacturaFecha(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{facturaFecha}</span>
            )}.
          </p>

          <p>Atentamente,</p>

          <br />

          <p className="font-bold">
            {isEditing ? (
              <input
                type="text"
                value={gerenteFirma}
                onChange={(e) => setGerenteFirma(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{gerenteFirma}</span>
            )}
            <br />Gerente General
          </p>

          <br />

          <p className="font-bold">
            {isEditing ? (
              <input
                type="text"
                value={empresaFirma}
                onChange={(e) => setEmpresaFirma(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{empresaFirma}</span>
            )}
            <br />
            FACTURA
            {isEditing ? (
              <input
                type="text"
                value={facturaNum}
                onChange={(e) => setFacturaNum(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{facturaNum}</span>
            )}
            <br />
            D:
            {isEditing ? (
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{direccion}</span>
            )}
            <br />
            T:
            {isEditing ? (
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none"
              />
            ) : (
              <span>{telefono}</span>
            )}
          </p>
        </div>
      </div>

    </>
  )
}

export default CreateInform
