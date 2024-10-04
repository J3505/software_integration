import { Modaledit } from "../modal/Modaledit"
import { useState } from 'react';

const Ingresar = ({ onInsert }) => {
    const [openModal, SetOpenModal] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleInsert = () => {
        if (inputValue.trim() !== '') {
            // Llamar a la función onInsert con el nuevo dato
            onInsert(inputValue);
            setInputValue(''); 
        }
    };

    return (
        <div>
            <Modaledit open={openModal} onClose={() => SetOpenModal(false)} />
            <div className="flex flex-col-reverse justify-center sm:flex-row p-6 gap-2">
                <input type="text" 
                    className="w-[100%] rounded-lg sm:w-[70%]" 
                    placeholder="Ingrese actividad..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-4 hover:cursor-pointer hover:bg-blue-700" onClick={handleInsert}>Insertar</button>
                <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-4 hover:cursor-pointer hover:bg-blue-700">Mostrar</button>
                <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-2 px-4 hover:cursor-pointer hover:bg-blue-700" onClick={() => SetOpenModal(true)}>Encabezado</button>
            </div>
        </div>
    )
}

export default Ingresar;

