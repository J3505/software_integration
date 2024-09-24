// import Tabla from "./Tabla/FilterTable"
import Header from "./Main_components/Header";
import Table from "../components/Tabla/Table";
import BotonSaidebar from "./Main_components/BotonSidebar";

const Main = () => {
  
  return (
    <div>


          <Header />
          {/* <div className="p-10">
              <Tabla />
          </div> */}

          <Table/>
          <div className="card flex justify-content-center ">        
                < BotonSaidebar/>
          </div>


        

          
    </div>
  )
}

export default Main
