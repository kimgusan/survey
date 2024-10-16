import React, { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, HelpCircle, BarChart } from "lucide-react";

const questions = [
    {
        question: "1. 은퇴 후 예상되는 월 생활비는 얼마인가요?",
        answers: [
            "100만 원 이하 (1점)",
            "100만 원 ~ 200만 원 (2점)",
            "200만 원 ~ 300만 원 (3점)",
            "300만 원 이상 (4점)",
        ],
    },
    {
        question: "2. 현재 은퇴 준비를 위해 저축하고 있는 금액은 얼마인가요?",
        answers: ["50만 원 이하 (1점)", "50만 원 ~ 100만 원 (2점)", "100만 원 ~ 150만 원 (3점)", "150만 원 이상 (4점)"],
    },
    {
        question: "3. 은퇴 후 생활비를 물가 상승률을 반영해 준비하고 계신가요?",
        answers: ["전혀 반영하지 않음 (1점)", "조금 반영함 (2점)", "대부분 반영함 (3점)", "완벽히 반영함 (4점)"],
    },
    {
        question: "4. 은퇴 후 필요한 의료비를 얼마나 대비하고 계신가요?",
        answers: ["대비하지 않음 (1점)", "일부 대비함 (2점)", "충분히 대비함 (3점)", "매우 잘 대비함 (4점)"],
    },
    {
        question: "5. 은퇴 후 소득을 창출할 수 있는 자산을 보유하고 계신가요?",
        answers: ["없음 (1점)", "소규모 자산 보유 (2점)", "중간 규모 자산 보유 (3점)", "충분한 자산 보유 (4점)"],
    },
    {
        question: "6. 월 평균 은퇴 자금 사용 계획은 어떻게 설정하고 있나요?",
        answers: [
            "150만 원 이하 (1점)",
            "150만 원 ~ 250만 원 (2점)",
            "250만 원 ~ 350만 원 (3점)",
            "350만 원 이상 (4점)",
        ],
    },
    {
        question: "7. 현재 자산의 일부를 은퇴 후 매각할 계획이 있나요?",
        answers: ["없다 (1점)", "조금 고려 중 (2점)", "매각 계획 있음 (3점)", "매각 준비 완료 (4점)"],
    },
    {
        question: "8. 은퇴 후에도 추가적인 소득원을 확보하고 있나요?",
        answers: ["전혀 없음 (1점)", "일부 계획 중 (2점)", "구체적인 계획 있음 (3점)", "실행 중 (4점)"],
    },
    {
        question: "9. 은퇴 연금을 위해 보험 상품이나 금융 상품을 준비하고 계신가요?",
        answers: ["전혀 없음 (1점)", "조금 준비됨 (2점)", "충분히 준비됨 (3점)", "매우 잘 준비됨 (4점)"],
    },
    {
        question: "10. 은퇴 후 부동산을 활용한 세무적인 증여 및 상속 플랜을 고려하고 계신가요?",
        answers: ["전혀 고려하지 않음 (1점)", "고려 중 (2점)", "구체적인 계획 있음 (3점)", "실행 준비 완료 (4점)"],
    },
    {
        question: "11. 부동산 투자 중 관심이 있는 항목은 무엇인가요?",
        answers: ["아파트 (1점)", "상가 (2점)", "빌딩 (3점)", "토지 (4점)"],
    },
    {
        question: "12. 부동산으로 보상금을 받는다면 가장 큰 보상금을 받을 것 같은 상품은 무엇인가요?",
        answers: ["대지", "초지", "농지 ", "산지"],
    },
    {
        question: "13. 토지 투자를 한다면 가장 중요하게 판단해야 할 요소는 무엇인가요?",
        answers: ["주변인프라", "도로 인접한 물건", "저렴한 가격", "개발 입지"],
    },
    {
        question: "14. 개발지 주변의 토지들의 투자 금액은 얼마라고 생각하시나요?",
        answers: ["1억 이하 (1점)", "5억 이하 (2점)", "10억 이하 (3점)", "20억 이상 (4점)"],
    },
    {
        question: "15. 은퇴 후 부동산 매각을 계획하고 있는가요?",
        answers: ["전혀 계획 없음 (1점)", "고려 중 (2점)", "매각 예정 (3점)", "준비 중 (4점)"],
    },
    {
        question: "16.부동산을 활용하여 연금 수익을 얻는 것에 대해 어떻게 생각하시나요?",
        answers: ["고려하지 않음 (1점)", "조금 고려함 (2점)", "적극 고려함 (3점)", "이미 실행 중 (4점)"],
    },
    {
        question: "17. 부동산 투자 시 세금 혜택에 대해 얼마나 중요하게 생각하시나요?",
        answers: ["중요하지 않음 (1점)", "다소 중요함 (2점)", "매우 중요함 (3점)", "필수적이라고 생각 (4점)"],
    },
    {
        question: "18. 주변 개발 호재에 대해 얼마나 신경 쓰고 있나요?",
        answers: ["전혀 신경 쓰지 않음 (1점)", "조금 신경 씀 (2점)", "많이 신경 씀 (3점)", "매우 중요 (4점)"],
    },
    {
        question: "19. 부동산의 임대 수익에 대해 어떻게 생각하시나요?",
        answers: ["중요하지 않음 (1점)", "추가적인 수익으로 고려 (2점)", "주요 수익원 (3점)", "필수적 (4점)"],
    },
    {
        question: "20. 부동산을 통해 자녀에게 물려줄 자산으로 적합하다고 생각하시나요?",
        answers: ["적합하지 않음 (1점)", "조금 적합함 (2점)", "매우 적합함 (3점)", "최고의 자산 (4점)"],
    },
];

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [certifiResult, setCertifiResult] = useState(true);

    const handleAnswer = (answerIndex) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    // 로그인 버튼 클릭 시 일반 설문조사로 넘어가는 부분 (차후 인증 아이콘 클릭 시 해당 기능 Click icon 에 따라 호출하는 api 가 달라질 예정)
    const loginBtn = () => {
        setCertifiResult(false);
    };

    const allProducts = [
        {
            name: "gold",
            path: `${process.env.PUBLIC_URL}/recommendIcon/금.png`,
        },
        {
            name: "apart",
            path: `${process.env.PUBLIC_URL}/recommendIcon/아파트.png`,
        },
        {
            name: "coin",
            path: `${process.env.PUBLIC_URL}/recommendIcon/코인.png`,
        },
        {
            name: "save",
            path: `${process.env.PUBLIC_URL}/recommendIcon/주식.png`,
        },
        {
            name: "ground",
            path: `${process.env.PUBLIC_URL}/recommendIcon/토지.png`,
        },
    ];

    const calculateResult = () => {
        const totalScore = selectedAnswers.reduce((sum, answer) => sum + (answer !== null ? answer + 1 : 0), 0);
        let status, recommendation, products;

        if (totalScore < 30) {
            status = "미흡 단계";
            recommendation = "노후 준비가 미흡한 상태입니다.";
            products = [allProducts[3], allProducts[3], allProducts[3]];
        } else if (totalScore <= 40) {
            status = "초기 단계";
            recommendation =
                "노후 준비가 이루어지지 않은 상태입니다. 현 시점에서 충분히 자산을 준비하지 않으면 은퇴 후 가장 기본적인 생활비조차 충족시키기 어려울 수 있습니다. 많은 사람들이 은퇴 후의 생활을 안일하게 생각하지만, 의료비, 생활비, 예기치 못한 비용은 날로 늘어납니다. 지금 준비하지 않으면 은퇴 후 큰 경제적 불안에 직면할 수 있습니다. 미래의 안정된 생활을 위해, 지금 당장 체계적인 자산 관리와 은퇴 준비가 필수적입니다.";
            products = [allProducts[0], allProducts[0], allProducts[0]];
        } else if (totalScore <= 50) {
            status = "기본 단계";
            recommendation =
                "노후에 대한 기본적인 준비는 시작했지만 여전히 부족합니다. 현재까지의 자산 관리로는 장기적인 안정을 보장하기 어려울 수 있습니다. 은퇴 후에도 예상치 못한 의료비와 물가 상승률은 꾸준히 당신의 자산을 갉아먹게 될 것입니다. 당신이 10년 후에 후회하는 상황을 피하려면, 지금부터 자산 증대 전략을 강화하고 추가적인 수익 창출 방법을 고려해야 합니다. 지금 준비하지 않으면 은퇴 후에도 계속해서 일해야 할 수도 있습니다.";
            products = [allProducts[1], allProducts[1], allProducts[1]];
        } else if (totalScore <= 60) {
            status = "준비 단계";
            recommendation =
                "당신은 어느 정도 노후를 준비했지만, 여전히 완벽한 준비는 아닙니다. 은퇴 후 20~30년 동안 안정적인 생활을 유지하려면 지금의 자산으로는 충분하지 않을 수 있습니다. 특히 의료비나 장기 요양에 대한 준비가 부족하다면 큰 재정적 부담에 직면할 수 있습니다. 은퇴 후의 경제적 안정성을 확보하기 위해서는 보다 적극적인 자산 관리와 장기적인 재무 계획이 필요합니다. 더 이상 미루지 말고, 은퇴 후에도 안락한 생활을 지속할 수 있도록 지금부터 대비하는 것이 중요합니다.";
            products = [allProducts[2], allProducts[2], allProducts[2]];
        } else if (totalScore <= 70) {
            status = "사고 위협 단계";
            recommendation =
                "노후를 대비한 자산 관리가 비교적 잘 이루어졌습니다. 하지만 물가 상승, 의료비 증가, 예기치 못한 사고 등 다양한 변수는 언제든지 발생할 수 있습니다. 당신의 현재 자산이 그런 예기치 못한 상황에 충분히 대응할 수 있는지 다시 한 번 점검해볼 필요가 있습니다. 만약 지금보다 더 강력한 재정 계획을 세운다면 은퇴 후에도 재정적인 걱정 없이 더욱 여유롭게 생활할 수 있을 것입니다.";
            products = [allProducts[3], allProducts[3], allProducts[3]];
        } else if (totalScore <= 80) {
            status = "변수 창출 단계";
            recommendation =
                "당신은 노후 준비를 잘 해왔고, 은퇴 후에도 안정적인 생활을 유지할 수 있는 자산을 보유하고 있습니다. 하지만 여전히 예기치 못한 변수들이 당신의 자산을 위협할 수 있음을 기억해야 합니다. 지금부터 더 효율적인 자산 운용 전략을 세우고, 부동산이나 토지와 같은 안전한 자산에 투자하여 자산을 더욱 증대시키는 것도 좋은 방법이 될 수 있습니다. 이미 잘 해오셨지만, 조금 더 적극적으로 준비한다면 당신의 은퇴 생활은 더욱 안정되고 여유로울 것입니다.";
            products = [allProducts[4], allProducts[4], allProducts[4]];
        } else {
            status = "준비 완료";
            recommendation =
                "당신은 준비를 잘 해왔습니다. 노후에도 추가적인 자산을 늘리기 위해서는 매우 적극적으로 준비하시길 권장드립니다.";
            products = [allProducts[3], allProducts[3], allProducts[3]];
        }

        return { totalScore, status, recommendation, products };
    };

    const QuestionnaireContent = () => (
        <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">노후 준비 질문지</h2>
            <div className="mb-6">
                <p className="mb-4 text-lg font-semibold text-gray-700">{questions[currentQuestion].question}</p>
                <div className="space-y-2">
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <button
                            key={index}
                            className={`block w-full text-left p-3 rounded-lg text-base transition-colors duration-200 ${
                                selectedAnswers[currentQuestion] === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                            onClick={() => handleAnswer(index)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                >
                    <ArrowLeft className="mr-1" size={16} />
                    이전
                </button>
                <button
                    className="flex items-center px-4 py-2 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQuestion] === null}
                >
                    {currentQuestion === questions.length - 1 ? "완료" : "다음"}
                    <ArrowRight className="ml-1" size={16} />
                </button>
            </div>
            <div className="h-2 mt-4 bg-gray-200 rounded-full">
                <div
                    className="h-2 transition-all duration-300 ease-in-out bg-blue-600 rounded-full"
                    style={{
                        width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                />
            </div>
            <p className="mt-2 text-sm text-center text-gray-600">
                {currentQuestion + 1} / {questions.length}
            </p>
        </div>
    );

    const ResultContent = () => {
        const { totalScore, status, recommendation, products } = calculateResult();
        return (
            <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-xl">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">노후 준비 결과</h2>
                <div className="p-4 mb-4 bg-blue-100 rounded-lg">
                    <p className="text-lg font-semibold text-blue-800">
                        총점: {totalScore} / {questions.length * 4}
                    </p>
                    <p className="text-lg font-semibold text-blue-800">노후 준비 상태: {status}</p>
                </div>
                <p className="mb-4 text-base text-gray-700">{recommendation}</p>
                <div className="mb-6">
                    {/* <h3 className="mb-2 text-lg font-semibold text-gray-700">분야별 준비 상태</h3> */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-700">추천 상품 Top 3</h3>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <div className="bg-gray-100 p-4 flex flex-col items-center">
                            <p className="mb-4">Top 1</p>
                            <img
                                // src={`${process.env.PUBLIC_URL}/recommendIcon/금.png`}
                                src={products[0].path}
                                alt={products[0].name}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="bg-gray-100 p-4 flex flex-col items-center">
                            <p className="mb-4">Top 2</p>
                            <img src={products[1].path} alt={products[1].name} className="w-full h-auto" />
                        </div>
                        <div className="bg-gray-100 p-4 flex flex-col items-center">
                            <p className="mb-4">Top 3</p>
                            <img src={products[2].path} alt={products[2].name} className="w-full h-auto" />
                        </div>
                    </div>

                    {/* <BarChart className="w-full h-40" /> */}
                </div>
                <button
                    className="w-full px-4 py-2 text-base text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={() => {
                        setShowResult(false);
                        setCurrentQuestion(0);
                        setSelectedAnswers(Array(questions.length).fill(null));
                    }}
                >
                    다시 시작
                </button>
            </div>
        );
    };

    const CertificationContainer = () => (
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
                    <img src={`${process.env.PUBLIC_URL}/loginIcon/btn_naver.svg`} alt="Naver" className="w-32 h-32" />
                </div>
                <div className="space-y-2"></div>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-center transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                    onClick={loginBtn}
                >
                    로그인
                </button>
            </div>
        </div>
    );

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-100 to-purple-100"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
            {certifiResult ? (
                <>
                    {/* <h1 className="mb-6 text-3xl font-bold text-gray-800">회사이름 및 로고</h1> */}
                    <div className="w-full max-w-md mx-auto pb-5 pr-2">
                        <img
                            src={`${process.env.PUBLIC_URL}/loginIcon/DAEYEON_Logo_update.png`}
                            alt="KaKao"
                            className="ml-2 w-full h-auto"
                        />
                        {/* <h1 className="mb-6 text-3xl font-bold text-gray-800">
                            회사이름 및 로고
                            <img
                                src={`${process.env.PUBLIC_URL}/loginIcon/DAEYEON_Logo_update.png`}
                                alt="KaKao"
                                className="ml-2 w-full h-auto"
                            />
                        </h1> */}
                    </div>

                    <CertificationContainer />
                    <button
                        className="flex items-center mt-4 text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        onClick={() =>
                            alert(
                                "입력하신 정보는 주식회사 대연의 자산으로 사용될 수 있으며 동의하시지 않는 경우 담당자에게 문의 바랍니다."
                            )
                        }
                    >
                        <HelpCircle className="mr-1" size={16} />
                        개인정보 처리방침
                    </button>
                </>
            ) : (
                <>
                    <h1 className="mb-6 text-3xl font-bold text-gray-800">나의 노후 준비 체크</h1>
                    {showResult ? <ResultContent /> : <QuestionnaireContent />}
                    <button
                        className="flex items-center mt-4 text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        onClick={() =>
                            alert(
                                "이 설문은 간단한 노후 준비 상태 체크를 위한 것입니다. 자세한 상담은 전문가와 상의하세요."
                            )
                        }
                    >
                        <HelpCircle className="mr-1" size={16} />이 설문에 대해 궁금한 점이 있나요?
                    </button>
                </>
            )}
        </div>
    );
};

export default App;
