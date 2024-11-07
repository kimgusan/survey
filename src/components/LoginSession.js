import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/userContext";
import { useContext, useEffect } from "react";

const LoginSession = () => {
    const { userInfo } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutBtn = async () => {
        navigate("/");
    };

    return (
        <div className="w-full flex">
            <button
                onClick={logoutBtn}
                className="rounded-lg pt-2 pb-1 pr-4 pl-4 mt-2 ml-auto bg-blue-500 text-white hover:bg-blue-600 shadow-md transition-all duration-200"
            >
                {userInfo ? `${userInfo.properties.nickname}` : "초기화면으로"}
            </button>
        </div>
    );
};

export default LoginSession;
