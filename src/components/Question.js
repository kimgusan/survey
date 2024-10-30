import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import CertificationContainer from "./CertificationContainer";

const Question = ({
    currentQuestion,
    setCurrentQuestion,
    selectedAnswers,
    setSelectedAnswers,
    handlePrevious,
    questions,
}) => {
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate("/result");
        }
    };

    const handleAnswer = (answerIndex) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answerIndex;
        setSelectedAnswers(newAnswers);
    };
    return (
        <>
            <CertificationContainer />
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
                        {currentQuestion === questions.length - 1 ? "결과 보기" : "다음"}
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
        </>
    );
};

export default Question;
