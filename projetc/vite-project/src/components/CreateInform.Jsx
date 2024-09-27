import { useNavigation } from "../config/js/navigation";


const CreateInform = () => {
  const {dinamickNavigate} = useNavigation();

  return (
    <div>
      
      <button onClick={()=>dinamickNavigate('main')}>volver</button>

      <button onClick={()=>dinamickNavigate('')}>Login</button>

    </div>
  )
}

export default CreateInform
