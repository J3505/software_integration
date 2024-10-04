import Tippy from "@tippy.js/react";
import { useNavigation } from "../config/js/navigation";
import Header from "./Main_components/Header";
import { TableInput } from "./Tabla/TableInput";
import { FaArrowAltCircleLeft } from "react-icons/fa";





const CreateInform = () => {
  const { dinamickNavigate } = useNavigation();
  // const [openModal, SetOpenModal] = useState(false);





  return (
    < >

      <Header />
      <div className="h-[20%] border" >
        < TableInput />
      </div>

      <div className="flex   px-16">
        <Tippy content={'Volver'}>

          <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer" onClick={() => dinamickNavigate('main')}>
            <FaArrowAltCircleLeft />
          </button>
        </Tippy>



      </div>


      {/* <button className="bg-[#41a8f4] text-white border-2 border-b-4 border-black rounded-md p-1 px-2 hover:cursor-pointer" onClick={()=>dinamickNavigate('')}>Login</button> */}



    </>
  )
}

export default CreateInform
