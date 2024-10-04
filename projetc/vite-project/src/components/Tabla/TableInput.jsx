

export const TableInput = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="overflow-x-auto w-full max-w-[80%]">
                    <table className="min-w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="border-x-2 text-xs text-gray-100 uppercase bg-[#41a8f4]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nº
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actividad
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Horas
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <th scope="row" className="px-6 py-2"></th>
                                <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"></td>
                                <td className="px-6 py-2"></td>
                                <td className="px-6 py-2 text-center">
                                    <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer">
                                        Previsualizar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


