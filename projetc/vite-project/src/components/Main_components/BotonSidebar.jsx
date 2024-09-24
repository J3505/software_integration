
import EditorDocs from './Editordocs';
import { Sidebar } from 'primereact/sidebar';
import { useState } from "react";
import Pdf from '../../assets/img/pdf.svg'

const BotonSidebar = () => {
    const [visible, setVisible] = useState(false);
  return (
    <>
        <Sidebar className=" bg-white" visible={visible} onHide={() => setVisible(false)} fullScreen>
            <div className="m-2">

                <EditorDocs />
            </div>
        </Sidebar>

        <div className="font-roboto flex items-center justify-center bg-[#41A8F4] p-2 hover:cursor-pointer border-2 rounded-tr-md rounded-tl-md rounded-br-md border-black border-b-4 " onClick={() => setVisible(true)} > 
                <img src={Pdf} style={{height:'25px'}} /> <strong className="text-white">Encabezado</strong> 
        </div>
    </>
  )
}

export default BotonSidebar
