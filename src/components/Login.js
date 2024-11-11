import React from "react";
import CertificationContainer from "./CertificationContainer";
import SocialKakao from "../api/kakaoLoginApi";
import SocialGoogle from "../api/googleLoginApi";
import { ErrorOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const privacyClick = () => {
        navigate("/privacyPolicyNotice");
    };

    return (
        <div>
            <CertificationContainer />
            <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 text-center">로그인 방식을 선택하세요.</h2>
                <div className="flex">
                    <SocialKakao />
                </div>
            </div>

            <div className="text-center mt-4 text-blue-800 flex items-center justify-center relative">
                <ErrorOutline
                    className="text-blue-800 mr-2 cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded"
                    style={{ fontSize: "20px", verticalAlign: "middle" }}
                    onClick={privacyClick}
                />
                <div
                    className="mt-1 cursor-pointer hover:text-blue-600 focus:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded"
                    onClick={privacyClick}
                >
                    개인 정보 처리 방침
                </div>
            </div>
        </div>
    );
};

export default Login;
