import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/createInform');
    };
    
    const dinamickNavigate = (path) => navigate(`/${path}`);


    return { handleAddClick, dinamickNavigate };
};