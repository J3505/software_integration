import Img from '../assets/img/softwareIntegration.png'
import { useLogin } from "../config/js/useLogin.js";
const Form = () => {
  const { 
    username, 
    setUsername, 
    password, 
    setPassword, 
    error, 
    handleLogin
  } = useLogin();

  return (
    
    <div>
      <form onSubmit={handleLogin} className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800">
        <div className="px-8 py-10 md:px-10">
          <div className="flex justify-center items-center">
            <img src={Img} alt="" className='w-[250px]'/>
          </div>
          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              >
                Usuario
              </label>
              <input
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="username"
                id="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              >
                Contraseña
              </label>
              <input
                className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>} 
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
          <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
            Olvidaste tu contraseña?
            <a className="font-medium underline" href="#">
              Click aqui
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
