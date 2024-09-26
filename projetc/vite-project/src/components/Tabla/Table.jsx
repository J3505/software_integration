import DaySelector from "../moment_components/DaySelector";
import { useNavigation } from "../../config/js/navigation";

const Table = () => {
    const { handleAddClick } = useNavigation();

    return (
        <>
            <div className="font-roboto m-20 relative overflow-x-auto border-2 rounded-md">
                <div className="bg-red flex justify-between items-center gap-6 m-8">
                    <div className="flex gap-4">
                        <select name="lista" id="lista" className="border-2 border-gray-300 rounded-md p-2 px-3">
                            <option value="01">Seleccionar</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                        </select>
                        <input type="text" placeholder="Buscar..." className="border-2 border-gray-300 rounded-md p-2 px-3" />
                        <DaySelector />
                    </div>
                    <button onClick={handleAddClick} className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-3 hover:cursor-pointer">
                        <strong>Agregar</strong>
                    </button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text--500 dark:text-gray-400">
                    <thead className="border-x-2 text-xs text-gray-100 uppercase bg-[#41a8f4] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nº</th>
                            <th scope="col" className="px-6 py-3">Asunto</th>
                            <th scope="col" className="px-6 py-3">DIA</th>
                            <th scope="col" className="px-6 py-3">MES</th>
                            <th scope="col" className="px-6 py-3">AÑO</th>
                            <th scope="col" className="px-6 py-3">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50 0">
                            <th scope="row" className="px-6 py-4">01</th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Respuesta 01</th>
                            <td className="px-6 py-4">20</td>
                            <td className="px-6 py-4">Setiembre</td>
                            <td className="px-6 py-4">2024</td>
                            <td className="px-6 py-4">
                                <a href="#" className="decoration-1">Visualizar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                        Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900">1000</span>
                    </span>
                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
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
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Table;
