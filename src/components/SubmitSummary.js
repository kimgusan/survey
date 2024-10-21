import React, { useEffect, useContext } from "react";
import CertificationContainer from "./CertificationContainer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/userContext";

const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

const SubmitSummary = () => {
    const { setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleGetToken = async () => {
            const search = new URLSearchParams(window.location.search);
            const code = search.get("code");

            if (!code) {
                return; // 인증 코드가 없으면 함수 종료
            }

            search.delete("code");
            window.history.replaceState(null, "", `${window.location.pathname}${search}`);

            // 인증 코드로 액세스 토큰 요청
            try {
                const response = await fetch("https://kauth.kakao.com/oauth/token", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                    body: new URLSearchParams({
                        grant_type: "authorization_code",
                        client_id: client_id,
                        redirect_uri: redirect_uri,
                        code: code,
                    }).toString(),
                });

                const result = await response.json();

                if (result.access_token) {
                    // 사용자 정보 요청 함수 호출 가능
                    await fetchUserInfo(result.access_token);
                }
            } catch (error) {
                console.error("Error fetching access token:", error);
            }
        };

        const fetchUserInfo = async (accessToken) => {
            try {
                const response = await fetch("https://kapi.kakao.com/v2/user/me", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                });

                const userData = await response.json();
                setUserInfo(userData);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        handleGetToken();
    }, []);

    const StartQuestionBtn = () => {
        navigate("/question");
    };

    return (
        <div>
            <CertificationContainer />
            <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center">재무 상태 분석 설문조사</h2>
                <div className="mb-6 max-w-md mx-auto">
                    <p className="bg-gray-100 p-4 rounded-md text-lg mt-5">
                        이 설문조사는 개인의 현재 재무 상태를 분석하여 각 고객에 맞춰 최적의 재테크 방법을 제안하기 위해
                        마련되었습니다.
                        <br />
                        <br />
                        제공하신 정보는 엄격한 비밀 유지 하에 처리되며,
                        <br /> 설문 결과를 개선하고 고객님께 맞춤형 서비스를 제공하는 목적으로만 사용됩니다.
                    </p>
                </div>
                <button
                    className="w-full px-4 py-2 text-base text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={StartQuestionBtn}
                >
                    설문 조사 시작
                </button>
            </div>
        </div>
    );
};

export default SubmitSummary;
