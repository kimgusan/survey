import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  BarChart,
} from "lucide-react";

const questions = [
  {
    question: "은퇴 후 예상되는 월 생활비는 얼마인가요?",
    answers: [
      "100만 원 이하",
      "100만 원 ~ 200만 원",
      "200만 원 ~ 300만 원",
      "300만 원 이상",
    ],
  },
  {
    question: "현재 은퇴 준비를 위해 저축하고 있는 금액은 얼마인가요?",
    answers: [
      "50만 원 이하",
      "50만 원 ~ 100만 원",
      "100만 원 ~ 150만 원",
      "150만 원 이상",
    ],
  },
  {
    question: "은퇴 후 생활비를 물가 상승률을 반영해 준비하고 계신가요?",
    answers: [
      "전혀 반영하지 않음",
      "조금 반영함",
      "대부분 반영함",
      "완벽히 반영함",
    ],
  },
  {
    question: "은퇴 후 필요한 의료비를 얼마나 대비하고 계신가요?",
    answers: [
      "대비하지 않음",
      "일부 대비함",
      "충분히 대비함",
      "매우 잘 대비함",
    ],
  },
  {
    question: "은퇴 후 소득을 창출할 수 있는 자산을 보유하고 계신가요?",
    answers: [
      "없음",
      "소규모 자산 보유",
      "중간 규모 자산 보유",
      "충분한 자산 보유",
    ],
  },
  {
    question: "월 평균 은퇴 자금 사용 계획은 어떻게 설정하고 있나요?",
    answers: [
      "150만 원 이하",
      "150만 원 ~ 250만 원",
      "250만 원 ~ 350만 원",
      "350만 원 이상",
    ],
  },
  {
    question: "현재 자산의 일부를 은퇴 후 매각할 계획이 있나요?",
    answers: ["없다", "조금 고려 중", "매각 계획 있음", "매각 준비 완료"],
  },
  {
    question: "은퇴 후에도 추가적인 소득원을 확보하고 있나요?",
    answers: ["전혀 없음", "일부 계획 중", "구체적인 계획 있음", "실행 중"],
  },
  {
    question: "은퇴 연금을 위해 보험 상품이나 금융 상품을 준비하고 계신가요?",
    answers: ["전혀 없음", "조금 준비됨", "충분히 준비됨", "매우 잘 준비됨"],
  },
  {
    question:
      "은퇴 후 부동산을 활용한 세무적인 증여 및 상속 플랜을 고려하고 계신가요?",
    answers: [
      "전혀 고려하지 않음",
      "고려 중",
      "구체적인 계획 있음",
      "실행 준비 완료",
    ],
  },
  {
    question: "부동산 투자 중 관심이 있는 항목은 무엇인가요?",
    answers: ["아파트", "상가", "빌딩", "토지"],
  },
  {
    question:
      "부동산으로 보상금을 받는다면 가장 큰 보상금을 받을 것 같은 상품은 무엇인가요?",
    answers: ["농지", "대지", "산지", "택지"],
  },
  {
    question: "토지 투자를 한다면 가장 중요하게 판단해야 할 요소는 무엇인가요?",
    answers: ["입지", "개발 계획", "가격", "주변 환경"],
  },
  {
    question: "개발지 주변의 토지들의 투자 금액은 얼마라고 생각하시나요?",
    answers: ["1억 이하", "5억 이하", "10억 이하", "20억 이상"],
  },
  {
    question: "은퇴 후 부동산 매각을 계획하고 있는가요?",
    answers: ["전혀 계획 없음", "고려 중", "매각 예정", "준비 중"],
  },
  {
    question:
      "부동산을 활용하여 연금 수익을 얻는 것에 대해 어떻게 생각하시나요?",
    answers: ["고려하지 않음", "조금 고려함", "적극 고려함", "이미 실행 중"],
  },
  {
    question: "부동산 투자 시 세금 혜택에 대해 얼마나 중요하게 생각하시나요?",
    answers: [
      "중요하지 않음",
      "다소 중요함",
      "매우 중요함",
      "필수적이라고 생각",
    ],
  },
  {
    question: "주변 개발 호재에 대해 얼마나 신경 쓰고 있나요?",
    answers: [
      "전혀 신경 쓰지 않음",
      "조금 신경 씀",
      "많이 신경 씀",
      "매우 중요",
    ],
  },
  {
    question: "부동산의 임대 수익에 대해 어떻게 생각하시나요?",
    answers: [
      "중요하지 않음",
      "추가적인 수익으로 고려",
      "주요 수익원",
      "필수적",
    ],
  },
  {
    question: "부동산을 통해 자녀에게 물려줄 자산으로 적합하다고 생각하시나요?",
    answers: ["적합하지 않음", "조금 적합함", "매우 적합함", "최고의 자산"],
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

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

  const calculateResult = () => {
    const totalScore = selectedAnswers.reduce(
      (sum, answer) => sum + (answer !== null ? answer + 1 : 0),
      0
    );
    let status, recommendation;

    if (totalScore <= 40) {
      status = "초기 단계";
      recommendation =
        "노후 준비를 위한 기본적인 계획 수립이 필요합니다. 은퇴 설계 전문가와의 상담을 추천드립니다.";
    } else if (totalScore <= 60) {
      status = "준비 중";
      recommendation =
        "노후 준비가 어느 정도 진행 중입니다. 다양한 투자 상품을 고려해보세요.";
    } else {
      status = "준비 완료";
      recommendation =
        "노후 준비가 잘 되어 있습니다. 정기적인 포트폴리오 리밸런싱을 권장합니다.";
    }

    return { totalScore, status, recommendation };
  };

  const QuestionnaireContent = () => (
    <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-xl">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">
        노후 준비 질문지
      </h2>
      <div className="mb-6">
        <p className="mb-4 text-lg font-semibold text-gray-700">
          {questions[currentQuestion].question}
        </p>
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
    const { totalScore, status, recommendation } = calculateResult();
    return (
      <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          노후 준비 결과
        </h2>
        <div className="p-4 mb-4 bg-blue-100 rounded-lg">
          <p className="text-lg font-semibold text-blue-800">
            총점: {totalScore} / {questions.length * 4}
          </p>
          <p className="text-lg font-semibold text-blue-800">
            노후 준비 상태: {status}
          </p>
        </div>
        <p className="mb-4 text-base text-gray-700">{recommendation}</p>
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            분야별 준비 상태
          </h3>
          <BarChart className="w-full h-40" />
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

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-100 to-purple-100"
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        나의 노후 준비 체크
      </h1>
      {showResult ? <ResultContent /> : <QuestionnaireContent />}
      <button
        className="flex items-center mt-4 text-sm text-blue-600 transition-colors duration-200 hover:text-blue-800"
        onClick={() =>
          alert(
            "이 설문은 간단한 노후 준비 상태 체크를 위한 것입니다. 자세한 상담은 전문가와 상의하세요."
          )
        }
      >
        <HelpCircle className="mr-1" size={16} />이 설문에 대해 궁금한 점이
        있나요?
      </button>
    </div>
  );
};

export default App;
