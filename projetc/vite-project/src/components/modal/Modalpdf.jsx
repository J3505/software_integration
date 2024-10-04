// npm install react-pdf
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { AiOutlineClose } from "react-icons/ai";
// import { Document, Page } from 'react-pdf';


import doc from '../../assets/pdf/el_principito_edincr.pdf'

export const Modalpdf = ({ open, onClose }) => {
    if (!open) return null;
    // onClick={onClose}

    const contentRef = useRef();
    const [pdfUrl, setPdfUrl] = useState(doc);

    const handleViewPdf = async () => {
        const element = contentRef.current;

        // Convierte el contenido HTML a un blob (PDF)
        const opt = {
            margin: 1,
            filename: 'document.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Genera el PDF como blob
        const pdfBlob = await html2pdf().from(element).set(opt).outputPdf('blob');

        // Crea una URL a partir del blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Establece la URL para mostrar el PDF en un iframe
        setPdfUrl(pdfUrl);
    };


    return (
        <>
            <div className="font-roboto backdrop-blur-sm z-50 w-full h-full fixed inset-0" >


                <div className=" m-2" onClick={(e) => { e.stopPropagation(); }}>

                    <div className="contenido">


                        <div className="flex  justify-between  items-center bg-white">
                            <div className="flex w-[96%]  justify-center items-center flex-col pb-1">

                                <h3 className='text-lg font-bold'>PREVISUALIZACION DE PDF</h3>
                                <p className='font-bold'>EL PRINCIPITO  </p>

                            </div>
                            <button className='bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-3 hover:cursor-pointer' onClick={onClose}> <AiOutlineClose /> </button>
                        </div>
                    </div>
                    {/* pdf-preview */}
                    <div className="flex justify-center" ref={contentRef}>

                        <iframe src={pdfUrl} className=' w-[95%] overflow-visible sm:w-[90%] md:w-[60%] h-[610px]' title="Vista Previa PDF" ></iframe>

                    </div>


                    <div className="h-10 bg-white">
                        {/* <button className='bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-3 hover:cursor-pointer' > Descargar</button> */}
                    </div>
                </div>

            </div>
        </>
    )
}
