import React, { useState } from "react";
import CertificationContainer from "./CertificationContainer";
import SocialKakao from "../api/api";

const Login = () => {
    const [certifiResult, setCertifiResult] = useState(false);

    const loginBtn = () => {
        <SocialKakao />;
        // setCertifiResult(true);
        // window.location.href = "/question";
        const client_id = "2c96481d59a235c57305c9a61b026480";
        const redirect_uri = "http://127.0.0.1:3000/question/";

        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
        window.location.href = kakaoURL; // 카카오 로그인 페이지로 리다이렉트
    };

    return (
        <div>
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
                    {/* <SocialKakao /> */}
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 text-sm text-center transition-colors duration-200 rounded-lg"
                        onClick={loginBtn}
                    >
                        로그인
                        {/* <SocialKakao /> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
