// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Question from "./components/Question";
import Result from "./components/Result";
import Layout from "./components/Layout"; // 공통 레이아웃 컴포넌트
import SubmitSummary from "./components/SubmitSummary";
import { useState } from "react";
import { UserProvider } from "./api/userContext";

const questions = [
    {
        question: "1. 은퇴 후 예상되는 월 생활비는 얼마인가요?",
        answers: ["100만 원 이하", "100만 원 ~ 200만 원", "200만 원 ~ 300만 원 ", "300만 원 이상"],
    },
    {
        question: "2. 현재 은퇴 준비를 위해 저축하고 있는 금액은 얼마인가요?",
        answers: ["50만 원 이하", "50만 원 ~ 100만 원", "100만 원 ~ 150만 원", "150만 원 이상"],
    },
    {
        question: "3. 은퇴 후 건강 관리를 위해 어떤 준비를 하고 계신가요?",
        answers: [
            "특별한 준비 없음",
            "정기 건강 검진만 계획 중",
            "건강 보험 강화 및 운동 계획 수립",
            "종합적인 건강관리 계획 및 수립 및 실행 중",
        ],
    },
    {
        question: "4. 은퇴 후 필요한 의료비를 얼마나 대비하고 계신가요?",
        answers: ["대비하지 않음", "일부 대비함", "충분히 대비함", "매우 잘 대비함"],
    },
    {
        question: "5. 은퇴 후 소득을 창출할 수 있는 자산을 보유하고 계신가요?",
        answers: ["없음", "소규모 자산 보유", "중간 규모 자산 보유", "충분한 자산 보유"],
    },
    {
        question: "6. 귀하의 은퇴 후 주거 계획은 무엇입니까?",
        answers: [
            "현재 거주 중인 집에서 계속 살 예정",
            "자녀나 친척과 함께 살 계획",
            "실버타운이나 은퇴 커뮤니티로 이주 예정",
            "도심의 편의시설이 갖춰진 곳으로 이사할 계획",
        ],
    },
    {
        question: "7. 현재 자산의 일부를 은퇴 후 매각할 계획이 있나요?",
        answers: ["없다", "조금 고려 중", "매각 계획 있음", "매각 준비 완료"],
    },
    {
        question: "8. 은퇴 후에도 추가적인 소득원을 확보하고 있나요?",
        answers: ["전혀 없음", "일부 계획 중", "구체적인 계획 있음", "실행 중"],
    },
    {
        question: "9. 은퇴 연금을 위해 보험 상품이나 금융 상품을 준비하고 계신가요?",
        answers: ["전혀 없음", "조금 준비됨", "충분히 준비됨 ", "매우 잘 준비됨 "],
    },
    {
        question: "10. 은퇴 후 부동산을 활용한 세무적인 증여 및 상속 플랜을 고려하고 계신가요?",
        answers: ["전혀 고려하지 않음", "고려 중", "구체적인 계획 있음", "실행 준비 완료"],
    },
    {
        question: "11. 부동산 투자 중 관심이 있는 항목은 무엇인가요?",
        answers: ["아파트", "상가 ", "빌딩", "토지"],
    },
    {
        question: "12. 부동산으로 보상금을 받는다면 가장 큰 보상금을 받을 것 같은 상품은 무엇인가요?",
        answers: ["대지", "초지", "농지 ", "산지"],
    },
    {
        question: "13. 토지 투자를 한다면 가장 중요하게 판단해야 할 요소는 무엇인가요?",
        answers: [
            "접도 현황 및 진출입로 확보 가능성",
            "교통 결절점 근접성 및 연계성",
            "지가 상승 잠재력 및 수익률 전망",
            "용도지역 현황 및 도시계획 방향성",
        ],
    },
    {
        question: "14. 개발지 주변의 토지들의 투자 금액은 얼마라고 생각하시나요?",
        answers: ["1억 이하", "5억 이하", "10억 이하", "20억 이상"],
    },
    {
        question: "15. 은퇴 후 부동산 매각을 계획하고 있는가요?",
        answers: ["전혀 계획 없음", "고려 중", "매각 예정", "준비 중"],
    },
    {
        question: "16.부동산을 활용하여 연금 수익을 얻는 것에 대해 어떻게 생각하시나요?",
        answers: ["고려하지 않음", "조금 고려함", "적극 고려함", "이미 실행 중"],
    },
    {
        question: "17. 부동산 투자 시 세금 혜택에 대해 얼마나 중요하게 생각하시나요?",
        answers: ["중요하지 않음", "다소 중요함 ", "매우 중요함", "필수적이라고 생각"],
    },
    {
        question: "18. 주변 개발 호재에 대해 얼마나 신경 쓰고 있나요?",
        answers: ["전혀 신경 쓰지 않음", "조금 신경 씀", "많이 신경 씀", "매우 중요"],
    },
    {
        question: "19. 부동산의 임대 수익에 대해 어떻게 생각하시나요?",
        answers: ["중요하지 않음", "추가적인 수익으로 고려", "주요 수익원", "필수적"],
    },
    {
        question: "20. 부동산을 통해 자녀에게 물려줄 자산으로 적합하다고 생각하시나요?",
        answers: ["적합하지 않음", "조금 적합함 ", "매우 적합함 ", "최고의 자산"],
    },
];

const App = () => {
    // 상태 관리
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(20).fill(null)); // 20은 총 질문 수를 의미
    const [showResult, setShowResult] = useState(false);

    // 결과 프로퍼티에서도 해당 이전 기능이 있기 때문에 App에서 관리
    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const props = {
        currentQuestion,
        setCurrentQuestion,
        showResult,
        setShowResult,
        handlePrevious,
        questions,
        selectedAnswers,
        setSelectedAnswers,
    };

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        {/* Layout 컴포넌트에 공통 스타일 적용 */}
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<Login />} /> {/* Login 경로 추가 */}
                        <Route path="/submitsummary" element={<SubmitSummary />} />
                        <Route path="/question" element={<Question {...props} />} />
                        <Route path="/result" element={<Result {...props} />} />
                    </Route>
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;
