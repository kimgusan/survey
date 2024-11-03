import React, { useEffect, useContext } from "react";
import CertificationContainer from "./CertificationContainer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/userContext";

// const API_SERVER = "https://returnplus.kr:8888/";
// const API_SERVER = "http://localhost:8000/";
const API_SERVER = "https://97a6-119-64-83-163.ngrok-free.app/";

const SubmitSummary = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleGetToken = async () => {
            // URL에서 쿼리 파라미터(code, state) 추출
            const search = new URLSearchParams(window.location.search);
            const code = search.get("code");
            const state = search.get("state");
            if (!code || !state) {
                return; // 인증 코드나 state가 없으면 함수 종료
            }

            // URL에서 인증 코드와 state를 삭제하여 사용자가 보지 않도록 함
            search.delete("code");
            search.delete("state");
            window.history.replaceState(null, "", `${window.location.pathname}${search}`);

            // 인증 코드를 백엔드로 전달하여 사용자 정보를 요청
            if (state === "kakao" || state === "google") {
                try {
                    console.log("ininininin");
                    const response = await fetch(`${API_SERVER}auth/${state}/callback?code=${code}`, {
                        headers: {
                            // ngrok 을 사용할 때 무료버젼의 경우 경고 메세지 무시
                            "ngrok-skip-browser-warning": "true",
                        },
                    });
                    console.log("response", response);
                    const result = await response.json();
                    console.log("result", result);

                    if (response.ok && result.user_info) {
                        // 사용자 정보를 UserContext에 저장
                        setUserInfo(result.user_info);
                    } else {
                        console.error("Failed to fetch user info from backend.", result.detail);
                    }
                } catch (error) {
                    console.error("Error fetching user info from backend:", error);
                }
            }
        };

        handleGetToken(); // 컴포넌트가 마운트될 때 handleGetToken 함수 실행
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
        } catch (error) {
            console.error("Error logging out from Kakao:", error);
        }
    };

    const StartQuestionBtn = () => {
        navigate("/question");
    };
    console.log(userInfo);
    return (
        <div>
            <CertificationContainer />
            <div className="w-full max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    - 재무 상태 분석 설문조사 이용정보 동의서 -
                </h2>
                <div className="mb-6 max-w-full mx-auto">
                    <div className="bg-gray-100 p-4 rounded-md text-lg mt-5">
                        본 서비스는 <strong>개인정보 보호법</strong> 및 관련 법령에 따라 고객님의 소중한 개인정보를
                        보호하며, 다음의 목적을 위해 개인정보를 수집 및 이용합니다:
                        <br />
                        <br />
                        <ul className="list-disc list-inside">
                            <li>회원가입 및 서비스 이용자 식별</li>
                            <li>서비스 제공 및 맞춤형 서비스 제공</li>
                            <li>고객 상담 및 서비스 관련 공지사항 전달</li>
                            <li>서비스 개선 및 분석을 위한 통계 자료 생성</li>
                            <li>부정 이용 방지 및 법적 분쟁 대응</li>
                        </ul>
                        <br />
                        <strong>수집하는 개인정보 항목</strong>
                        <br />
                        필수 항목: 이름, 이메일 주소, 휴대폰 번호, 로그인 정보
                        <br />
                        선택 항목: 프로필 사진
                        <br />
                        <br />
                        제공하신 정보는 원칙적으로 <strong>개인정보 수집 및 이용 목적</strong>이 달성된 후 지체 없이
                        파기됩니다. 단, 관련 법령에 따라 계약 관련 기록은 5년, 소비자 분쟁 기록은 3년간 보관됩니다.
                        <br />
                        <br />
                        회사는 이용자의 동의 없이는 개인정보를 <strong>제3자에게 제공하지 않으며</strong>, 필요한 경우
                        고객님의 동의를 받아 외부에 개인정보 처리 업무를 위탁할 수 있습니다.
                        <br />
                        <br />
                        <strong>개인정보는 보유 기간이 경과하거나 처리 목적이 달성되면 지체 없이 안전하게 파기</strong>
                        됩니다.
                        <br />
                        <br />
                        이용자는 개인정보의 열람, 수정, 삭제, 처리 정지 요구를 할 수 있으며, 동의하지 않을 권리가
                        있습니다. 단, 필수 항목에 대한 동의를 거부하실 경우 서비스 이용에 제한이 있을 수 있습니다.
                    </div>
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
