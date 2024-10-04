
import { AiOutlineClose } from "react-icons/ai";
export default function Modaledit({open, onClose }) {
    if (!open) return null;
    return (
        <>
            <div className="bg-red-800">
                    
                <button onClick={onClose} >
                    <AiOutlineClose />
                </button>

            </div>
        </>
    )
}
