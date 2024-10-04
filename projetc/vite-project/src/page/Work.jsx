import { useNavigate } from "react-router-dom";
import Grafig from "../components/Grafico/Grafig";


export const Work = () => {
  const { dinamicNav } = useNavigate();
  return (
    <>
      <button
        className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer" onClick={() => dinamicNav('main')}>
        Volver
      </button>



      <Grafig />

    </>
  )
}



