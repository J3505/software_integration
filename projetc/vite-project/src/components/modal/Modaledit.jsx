import { AiOutlineClose } from "react-icons/ai";
import { Docs } from "../Docs/Docs";
import { useState, useRef } from "react";

export const Modaledit = ({ open, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);

    // Ref para el contenido del documento
    const printRef = useRef(null);

    // Función para imprimir solo el documento
    const handlePrint = () => {
        const printContent = printRef.current;
        const originalContent = document.body.innerHTML;

        // Reemplazar el contenido del body con el del documento
        document.body.innerHTML = printContent.innerHTML;
        window.print();

        // Restaurar el contenido original del body
        document.body.innerHTML = originalContent;
        window.location.reload(); // Recargar la página para que React vuelva a montar los componentes
    };

    if (!open) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex justify-center items-center pt-2 bg-black bg-opacity-50">
                {/* Contenedor del modal */}
                <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    
                    {/* Encabezado fijo */}
                    <div className="w-full flex items-center justify-between bg-blue-200 p-2">
                        {/* Botón para alternar edición */}
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer"
                        >
                            {isEditing ? 'Guardar' : 'Editar'}
                        </button>

                        {/* Selección de documentos */}
                        <select className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer" name="Newdocs" id="Docs">
                            <option value="01">Informe</option>
                            <option value="02">Solicitud</option>
                            <option value="03">Permiso</option>
                        </select>

                        {/* Botones para imprimir y cerrar */}
                        <div className="flex items-center gap-2 ">
                            <button
                                onClick={handlePrint}
                                className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer"
                            >
                                Imprimir
                            </button>

                            <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-2 hover:cursor-pointer hover:bg-red-600" onClick={onClose}>
                                <AiOutlineClose />
                            </button>
                        </div>
                    </div>

                    {/* Contenido desplazable solo para el documento */}
                    <div className="overflow-y-auto h-[calc(100vh-50px)] mt-2 flex justify-center p-6">
                        {/* Documento con tamaño A4 */}
                        <div ref={printRef} className="bg-white p-8 shadow-lg" style={{ width: '210mm', height: '297mm' }}>
                            <Docs isEditing={isEditing} setIsEditing={setIsEditing} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
