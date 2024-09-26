import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/createInform');
    };

    return { handleAddClick };
};