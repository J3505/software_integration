


import { AiOutlineClose } from "react-icons/ai";




export const Modaledit = ({ open, onClose }) => {
    if (!open) return null;
    return (
        <>
            <div className="bg-blue-600 h-full w-full " >
                <button onClick={onClose} >
                    <AiOutlineClose />
                </button>
            </div>
        </>
    )
}



