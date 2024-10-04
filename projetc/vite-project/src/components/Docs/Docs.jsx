import { useState } from "react";
import LogoSi from '../../assets/img/softwareIntegration.png'

export const Docs = ({ isEditing, setIsEditing }) => {
    // Estados para los textos
    const [fecha, setFecha] = useState('Lima, 04 de Octubre de 2024');
    const [gerente, setGerente] = useState('Marcos Arevalo');
    const [empresa, setEmpresa] = useState('GERENCIA DE RIESGOS ASESORES Y CORREDORES DE SEGUROS S.R.L.');
    const [meses, setMeses] = useState('Octubre, Noviembre y Diciembre 2024');
    const [servicio, setServicio] = useState('Servicio de mejoras al Software Cotizador de Seguros Vehiculares con Microservicios en Kubernetes y Google Cloud Platform');
    const [facturaFecha, setFacturaFecha] = useState('XX-XX-XXXX');
    const [gerenteFirma, setGerenteFirma] = useState('Freddy Bendezu');
    const [empresaFirma, setEmpresaFirma] = useState('SOFTWARE INTEGRATION CONSULTING E.I.R.L.');
    const [facturaNum, setFacturaNum] = useState('XX-XX-XXXX - Nro. E001-XX');
    const [direccion, setDireccion] = useState('Av. Paseo de la República 1810 Lince');
    const [telefono, setTelefono] = useState('51 959689277');

    return (
        <>
            <div className="overflow-y-auto p-12 max-w-3xl mx-auto bg-white ">

                {/* Fecha */}
                {isEditing ? (
                    <div className="flex justify-end">
                        <input
                            type="text"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            className="w-[50%] text-right text-lg mb-8 bg-transparent border-b border-gray-400 focus:outline-none"
                        />
                    </div>
                ) : (
                    <div>
                        <img src={LogoSi} style={{ width: '120px' }} />
                        <p className="text-right text-lg mb-8">{fecha}</p>
                    </div>
                )}

                {/* Encabezado */}
                <h2 className="text-md font-bold mb-4">
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
                    El presente informe permite conocer las actividades realizadas por Software Integration Consulting durante los meses de &nbsp;
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
                    &nbsp;como parte del <strong>"</strong>
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

                <p className="mt-20">Atentamente,</p>

                <br />

                <div className="font-bold mt-28">
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
                </div>

                <br />

                <div className="font-bold flex justify-between mt-48 text-sm">

                    <div>
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
                                className="w-full bg-transparent border-b border-gray-400 focus:outline-none "
                            />
                        ) : (
                            <span>{telefono}</span>
                        )}
                    </div>

                    <div>
                        FACTURA: 

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

                    </div>


                </div>
            </div>
        </>
    );
};
