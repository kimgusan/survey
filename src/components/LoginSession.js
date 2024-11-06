import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/userContext";
import { useContext, useEffect } from "react";

const API_SERVER = "https://api.returnplus.kr/";

const LoginSession = () => {
    const { userInfo } = useContext(UserContext);
    const navigate = useNavigate();

    const logoutBtn = async () => {
        try {
            const response = fetch(`${API_SERVER}/auth/kakao/logout`, {
                headers: {
                    headers: { "ngrok-skip-browser-warning": "true" },
                },
            });
            if (response.ok) {
                const result = (await response).json();
                console.log("Logout successful", result);
                navigate("/");
            } else {
                console.error("Logout failed", (await response).statusText);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full flex">
            <button
                onClick={logoutBtn}
                className="rounded-lg pt-2 pb-1 pr-4 pl-4 mt-2 ml-auto bg-blue-500 text-white hover:bg-blue-600 shadow-md transition-all duration-200"
            >
                {userInfo ? `${userInfo.properties.name}` : "로그아웃"}
            </button>
        </div>
    );
};

export default LoginSession;
