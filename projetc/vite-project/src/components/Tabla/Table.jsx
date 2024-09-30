import DaySelector from "../moment_components/DaySelector";
import { useNavigation } from "../../config/js/navigation";
import { useState } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


const Table = () => {
    
    const { handleAddClick } = useNavigation();
    const [rows,  setRows ] = useState([
        { id: 1, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 2, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 3, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 4, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 5, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 6, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 7, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        
        { id: 8, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 9, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },
        { id: 10, asunto: 'Respuesta 02', dia: 20, mes: 'Setiembre', anio: 2024 },

    ]);

    // const plusAddClick = () => {setRows
    //     const newRow = {
    //         id: rows.length + 1,
    //         asunto: `Respuesta ${rows.length + 1}`, 
    //         dia: 21, 
    //         mes: 'Octubre',
    //         ano: 2024 
    //     };
    //     setRows([...rows, newRow]); 
    // };


    return (
        // relative
        <>
            <div className="h-[580px] font-roboto m-2  relativo border-2 rounded-md overflow-x-auto">
                
                <div className="bg-red flex justify-between items-center gap-6 m-8">
                    <div className="flex gap-4">
                        <select name="lista" id="lista" className="border-2 border-gray-300 rounded-md p-2 px-3">
                            <option value="01">Seleccionar</option>
                            <option value="01">Doc Tipo 01</option>
                            <option value="02">Doc Tipo 02</option>
                            <option value="03">Doc Tipo 03</option>
                            <option value="04">Doc Tipo 04</option>
                        </select>
                        <input type="text" placeholder="Buscar..." className="border-2 border-gray-300 rounded-md p-2 px-3" />
                        <DaySelector />
                    </div>

                    <div className="flex gap-2 ">

                        <Tippy  content="Agregar" >
                        <button onClick={handleAddClick} className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-3 hover:cursor-pointer">
                            <strong>Agregar</strong>
                        </button>
                        </Tippy>
                    </div>

                    

                </div>

                <div className="h-[450px] flex flex-col justify-between ">

                    <table className="w-full text-sm text-left rtl:text-right text--500 ">
                        <thead className="border-x-2 text-xs text-gray-100 uppercase bg-[#41a8f4]">
                            <tr>
                                <th scope="col" className="px-6 py-3">nº</th>
                                <th scope="col" className="px-6 py-3">Asunto</th>
                                <th scope="col" className="px-6 py-3">DIA</th>
                                <th scope="col" className="px-6 py-3">MES</th>
                                <th scope="col" className="px-6 py-3">AÑO</th>
                                <th scope="col" className="px-6 py-3">Accion</th>
                            </tr>
                        </thead>
                        <tbody >
                            {rows.map((row) => (
                                        <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
                                            <th scope="row" className="px-6 py-2">{row.id}</th>
                                            <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">{row.asunto}</td>
                                            <td className="px-6 py-2">{row.dia}</td>
                                            <td className="px-6 py-2">{row.mes}</td>
                                            <td className="px-6 py-2">{row.anio}</td>
                                            <td className="px-6 py-2">
                                                <a href="#" className="decoration-1">Visualizar</a>
                                            </td>
                                        </tr>
                                ))}
                        </tbody>
                    </table>


                    <nav className=" flex flex-row justify-between px-4 py-6" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                                Paginas <span className="font-semibold text-gray-900 dark:text-white">1 - 5</span> de <span className="font-semibold text-gray-900">25</span>
                            </span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Anterio</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Siguiente</a>
                                </li>
                            </ul>
                    </nav>


                </div>
            </div>
        </>
    );
};

export default Table;
