import React from "react";
import CertificationContainer from "./CertificationContainer";
import SocialKakao from "../api/kakaoLoginApi";

const Login = () => {
    return (
        <div>
            <CertificationContainer />
            <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 text-center">로그인 방식을 선택하세요.</h2>
                <SocialKakao />
            </div>
        </div>
    );
};

export default Login;
