import React, { useEffect, useContext } from "react";
import CertificationContainer from "./CertificationContainer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/userContext";

const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
const kakaoRedirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
const googleClientSecretKey = process.env.REACT_APP_GOOGLE_CLIENT_SECRET_KEY;

const SubmitSummary = () => {
    const { setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleGetToken = async () => {
            const search = new URLSearchParams(window.location.search);
            const code = search.get("code");
            const state = search.get("state");
            if (!code || !state) {
                return; // 인증 코드가 없으면 함수 종료
            }

            search.delete("code");
            search.delete("state");
            window.history.replaceState(null, "", `${window.location.pathname}${search}`);

            if (state === "kakao") {
                try {
                    const response = await fetch("https://kauth.kakao.com/oauth/token", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                        },
                        body: new URLSearchParams({
                            grant_type: "authorization_code",
                            client_id: kakaoClientId,
                            redirect_uri: kakaoRedirectUri,
                            code: code,
                        }).toString(),
                    });

                    const result = await response.json();

                    if (result.access_token) {
                        // 사용자 정보 요청 함수 호출 가능
                        await fetchUserInfo(result.access_token, state);
                    }
                } catch (error) {
                    console.error("Error fetching access token:", error);
                }
            } else if (state === "google") {
                // 인증 코드로 액세스 토큰 요청
                try {
                    const response = await fetch("https://oauth2.googleapis.com/token", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            code: code,
                            client_id: googleClientId,
                            client_secret: googleClientSecretKey,
                            redirect_uri: googleRedirectUri,
                            grant_type: "authorization_code",
                        }).toString(),
                    });

                    const result = await response.json();

                    if (result.access_token) {
                        // 사용자 정보 요청 함수 호출 가능
                        await fetchUserInfo(result.access_token, state);
                    }
                } catch (error) {
                    console.error("Error fetching access token:", error);
                }
            }
        };

        const fetchUserInfo = async (accessToken, state) => {
            try {
                if (state === "kakao") {
                    const userInfoResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    });

                    const userData = await userInfoResponse.json();
                    setUserInfo(userData);
                    logoutKakao(accessToken);
                } else if (state === "google") {
                    // 기본 사용자 정보 가져오기
                    const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });

                    const userData = await userInfoResponse.json();
                    setUserInfo({ ...userData });

                    // 추가 사용자 정보 (예: 전화번호) 가져오기 (google에서 일반적으로 핸드폰을 제공하지 않아 해당 기능 비활성화)
                    // const peopleApiResponse = await fetch(
                    //     "https://people.googleapis.com/v1/people/me?personFields=phoneNumbers",
                    //     {
                    //         method: "GET",
                    //         headers: {
                    //             Authorization: `Bearer ${accessToken}`,
                    //         },
                    //     }
                    // );

                    // const userPhoneData = await peopleApiResponse.json();

                    // const phoneNumbers = userPhoneData.phoneNumbers ? userPhoneData.phoneNumbers : "null";
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        handleGetToken();
    }, [setUserInfo]);

    // Kakao 로그아웃
    const logoutKakao = async (access_token) => {
        try {
            await fetch("https://kapi.kakao.com/v1/user/logout", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            console.log("Kakao logout successfule");
        } catch (error) {
            console.error("Error logging out from Kakao:", error);
        }
    };

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
