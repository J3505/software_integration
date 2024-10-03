import StI from '../../assets/img/softwareIntegration.png'
import User from '../../assets/img/User.png'
import { IoExitOutline } from "react-icons/io5";
import { useNavigation } from "../../config/js/navigation";
import { GrDocumentConfig } from "react-icons/gr";
import Tippy from '@tippy.js/react';

const Header = () => {



    const {dinamickNavigate} = useNavigation();
  return (
    <div>
        <header className="text-gray-600  font-roboto border border-b-2">
            <div className="container  mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <nav className=" lg:w-2/5 flex-wrap items-center text-base md:ml-auto hidden md:flex">
                
                    <Tippy content="Salir">
                    <a className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:border-b-[0.5px]" onClick={()=>dinamickNavigate('')}   >
                        <IoExitOutline style={{fontSize:"30px"}} />
                    </a>
                    </Tippy>

                    <Tippy content="Actividades">

                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:border-b-[0.5px]" onClick={()=>dinamickNavigate('Work')}>

                            <GrDocumentConfig  style={{fontSize:"27px"}} />
                        </a>
                    </Tippy>
                    
                    {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="hover:text-gray-900">Fourth Link</a> */} 
                </nav>

                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src={StI} className='w-[200px]' />
                </a>

                <div className="lg:w-2/5 lg:justify-end ml-5 lg:ml-0 hidden md:flex">
                    <div className='flex p-2'>
                            <p className='flex flex-col'>
                                <strong className='font-bold text-black'>Bienvenido:</strong>
                                <span className='text-black'>User</span>
                            </p>
                        <img src={User} style={{width:'50px'}}/>
                        

                    </div>

                    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Salir
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button> */}
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
