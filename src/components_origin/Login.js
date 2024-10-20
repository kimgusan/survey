import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, HelpCircle, BarChart } from "lucide-react";
import SocialKakao from "../api/api";

export const CertificationContainer = () => (
    <div>
        <div className="w-full max-w-md mx-auto pb-5 pr-2">
            <img
                src={`${process.env.PUBLIC_URL}/loginIcon/DAEYEON_Logo_update.png`}
                alt="Logo"
                className="ml-2 w-full h-auto"
            />
        </div>
    </div>
);

export const Login = ({ certifiResult, setCertifiResult, loginBtn }) => {
    const [localCertifiResult, setLocalCertifiResult] = useState(false);

    return (
        <>
            <CertificationContainer />
            <div className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl">
                <h2 className="mb-4 text-2xl font-bold text-gray-800 text-center">원하시는 인증 방식을 선택하세요.</h2>
                <div className="w-full grid grid-cols-2 gap-4 ">
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-lg font-semibold text-gray-700 text-center">카카오톡</p>
                        <img
                            src={`${process.env.PUBLIC_URL}/loginIcon/btn_kakao.svg`}
                            alt="KaKao"
                            className="ml-2 w-32 h-32"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-lg font-semibold text-gray-700 text-cente">네이버</p>
                        <img
                            src={`${process.env.PUBLIC_URL}/loginIcon/btn_naver.svg`}
                            alt="Naver"
                            className="w-32 h-32"
                        />
                    </div>
                    <div className="space-y-2"></div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-center transition-colors duration-200 rounded-lg hover:bg-kakaoColor"
                        onClick={loginBtn}
                    >
                        <SocialKakao />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
