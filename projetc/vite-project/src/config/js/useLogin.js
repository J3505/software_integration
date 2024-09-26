import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../database/supabaseClient";

export const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e, setLoading) => { 
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase 
      .from('users') 
      .select('*') 
      .eq('username', username)
      .eq('password', password) 
      .single();

    if (error) { 
      console.error('Error al iniciar sesión:', error.message);
      setError('Verifica tu usuario y contraseña.');
      setLoading(false);
    } else if (data) {
      console.log('Acceso correcto:', data);
      setError(null);

      setTimeout(() => {
        setLoading(false);
        navigate('/main');
      }, 3000);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
  };
};
