import { useState } from 'react';

export default function Input() {
    const [ openModal, SetOpenModal ] = useState (false);
    return (
        <>
            <div className="flex flex-col-reverse justify-center sm:flex-row p-6 gap-2">
                <input type="text" className=" w-[100%]  rounded-lg sm:w-[70%]" placeholder="Ingrese link..." />
                <button  className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-4 hover:cursor-pointer hover:bg-blue-700">Insertar</button>
                <button  className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-4 hover:cursor-pointer hover:bg-blue-700">Mostar</button>
                <button  className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-4 hover:cursor-pointer hover:bg-blue-700" onClick={() => SetOpenModal(true)} >Encabezado</button>
            </div>
        </>
    )
}
