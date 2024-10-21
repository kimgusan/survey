// Result.js
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../api/userContext";
import { handleSaveToSheet } from "../api/postGoogleSheet";

const allProducts = [
    {
        name: "금 투자", // KRX
        path: `${process.env.PUBLIC_URL}/recommendIcon/금.png`,
    },
    {
        name: "예금/적금", // 예적금
        path: `${process.env.PUBLIC_URL}/recommendIcon/예금.png`,
    },
    {
        name: "비트코인", // 비트코인
        path: `${process.env.PUBLIC_URL}/recommendIcon/코인.png`,
    },
    {
        name: "주식", //주식
        path: `${process.env.PUBLIC_URL}/recommendIcon/주식.png`,
    },
    {
        name: "개발예정지", // 개발예정지
        path: `${process.env.PUBLIC_URL}/recommendIcon/토지.png`,
    },
];

const allGrandMatherImg = [
    {
        name: "",
        path: `${process.env.PUBLIC_URL}/Image/ScoreMother(30_40).png`,
        text: `안녕하세요, 저는 이 시장 골목에서 오랜 세월을 보내왔어요. 젊었을 때는 열심히 일하고, 가정을 꾸리며 바쁜 날들을 보냈지만, 솔직히 말하면 노후 준비를 제대로 하지 못한 탓에 지금은 이렇게 작은 자리에서 하루를 보내고 있답니다.

젊었을 때는 앞만 보고 살았어요. 아이들 키우고 생활비를 버느라 노후를 대비할 여유가 없었거든요. 그때는 그게 당연한 줄 알았죠. 하루하루가 바빠서 미래를 생각할 겨를도 없었어요. 하지만 시간이 지나면서, 준비되지 않은 노후가 얼마나 큰 걱정으로 다가오는지 깨달았답니다. 지금은 큰 수입 없이 살아가고 있고, 그래서 시장 골목에 나와 사람들이 오가는 걸 보며 시간을 보내곤 해요.

사람들은 바쁘게 지나가지만, 저는 그들의 발걸음을 천천히 따라가며 제 인생을 돌아보곤 해요. 한때는 이 골목에서 웃고 떠들며 살았던 시절도 있었는데, 이제는 그저 기억 속에서만 그 시절을 되새길 뿐이죠. 자식들도 바쁘고, 저에게는 따뜻한 한 끼와 지나가는 사람들의 짧은 인사 말이 하루를 버티는 힘이 되어주고 있어요.

노후 준비를 하지 못해서 이런 상황에 처하게 되었지만, 그래도 이곳에서의 추억과 이 시장의 소리가 제게는 큰 위로가 됩니다.`,
    },
    {
        name: "",
        path: `${process.env.PUBLIC_URL}/Image/ScoreMother(40_50).png`,
        text: `안녕하세요, 저는 이 시장 골목에서 오랜 세월을 보내왔어요. 젊었을 때는 열심히 일하고, 가정을 꾸리며 바쁜 날들을 보냈지만, 솔직히 말하면 노후 준비를 제대로 하지 못한 탓에 지금은 이렇게 작은 자리에서 하루를 보내고 있답니다.

젊었을 때는 앞만 보고 살았어요. 아이들 키우고 생활비를 버느라 노후를 대비할 여유가 없었거든요. 그때는 그게 당연한 줄 알았죠. 하루하루가 바빠서 미래를 생각할 겨를도 없었어요. 하지만 시간이 지나면서, 준비되지 않은 노후가 얼마나 큰 걱정으로 다가오는지 깨달았답니다. 지금은 큰 수입 없이 살아가고 있고, 그래서 시장 골목에 나와 사람들이 오가는 걸 보며 시간을 보내곤 해요.

사람들은 바쁘게 지나가지만, 저는 그들의 발걸음을 천천히 따라가며 제 인생을 돌아보곤 해요. 한때는 이 골목에서 웃고 떠들며 살았던 시절도 있었는데, 이제는 그저 기억 속에서만 그 시절을 되새길 뿐이죠. 자식들도 바쁘고, 저에게는 따뜻한 한 끼와 지나가는 사람들의 짧은 인사 말이 하루를 버티는 힘이 되어주고 있어요.

노후 준비를 하지 못해서 이런 상황에 처하게 되었지만, 그래도 이곳에서의 추억과 이 시장의 소리가 제게는 큰 위로가 됩니다.`,
    },
    {
        name: "할머니의 사랑의 선물: 세대를 잇는 명품 가방",
        path: `${process.env.PUBLIC_URL}/Image/ScoreMother(50_60).png`,
        text: "",
    },
    {
        name: "황금빛 노후: 할머니의 화려한 슈퍼카와 인생 2막",
        path: `${process.env.PUBLIC_URL}/Image/ScoreMother(60_70).png`,
        text: "",
    },
    {
        name: "황금씨앗: 할머니가 심는 미래의 땅",
        path: `${process.env.PUBLIC_URL}/Image/ScoreMother(80).png`,
        text: "",
    },
];

const Result = ({ selectedAnswers, setShowResult, setCurrentQuestion, setSelectedAnswers, questions }) => {
    const navigate = useNavigate();
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        if (userInfo) {
            handleSaveToSheet(userInfo);
        }
    }, [userInfo]);

    const calculateResult = () => {
        const totalScore = selectedAnswers.reduce((sum, answer) => sum + (answer !== null ? answer + 1 : 0), 0);
        let status, recommendation, products, imageTitle, finalImage, imageRecommendation;

        if (totalScore < 30) {
            status = "노후의 신중한 준비가 필요한 시점";
            recommendation =
                "노후 준비가 부족하다면 은퇴 후 예상치 못한 어려움에 직면할 수 있습니다. 기본 생활비, 의료비, 그리고 예기치 못한 비용은 시간이 지날수록 늘어납니다. 지금 당장 자산 관리와 은퇴 준비를 시작하지 않으면 미래의 경제적 불안이 현실이 될 수 있습니다. 현재 상황을 점검하고, 노후의 안정을 위해 체계적인 재정 계획을 세우는 것이 필요합니다. 더 나은 삶을 위해 지금 준비하세요..";
            products = [allProducts[4], allProducts[0], allProducts[1]];
            imageTitle = allGrandMatherImg[0].name;
            finalImage = allGrandMatherImg[0].path;
            imageRecommendation = allGrandMatherImg[0].text;
        } else if (totalScore <= 40) {
            status = "노후의 신중한 출발";
            recommendation =
                "노후 준비가 이루어지지 않은 상태입니다. 현 시점에서 충분히 자산을 준비하지 않으면 은퇴 후 가장 기본적인 생활비조차 충족시키기 어려울 수 있습니다. 많은 사람들이 은퇴 후의 생활을 안일하게 생각하지만, 의료비, 생활비, 예기치 못한 비용은 날로 늘어납니다. 지금 준비하지 않으면 은퇴 후 큰 경제적 불안에 직면할 수 있습니다. 미래의 안정된 생활을 위해, 지금 당장 체계적인 자산 관리와 은퇴 준비가 필수적입니다.";
            products = [allProducts[4], allProducts[2], allProducts[0]];
            imageTitle = allGrandMatherImg[0].name;
            finalImage = allGrandMatherImg[0].path;
            imageRecommendation = allGrandMatherImg[0].text;
        } else if (totalScore <= 50) {
            status = "노후의 균형있는 접근 방식";
            recommendation =
                "노후에 대한 기본적인 준비는 시작했지만 여전히 부족합니다. 현재까지의 자산 관리로는 장기적인 안정을 보장하기 어려울 수 있습니다. 은퇴 후에도 예상치 못한 의료비와 물가 상승률은 꾸준히 당신의 자산을 갉아먹게 될 것입니다. 당신이 10년 후에 후회하는 상황을 피하려면, 지금부터 자산 증대 전략을 강화하고 추가적인 수익 창출 방법을 고려해야 합니다. 지금 준비하지 않으면 은퇴 후에도 계속해서 일해야 할 수도 있습니다.";
            products = [allProducts[4], allProducts[1], allProducts[0]];
            imageTitle = allGrandMatherImg[1].name;
            finalImage = allGrandMatherImg[1].path;
            imageRecommendation = allGrandMatherImg[1].text;
        } else if (totalScore <= 60) {
            status = "노후의 균형";
            recommendation =
                "당신은 어느 정도 노후를 준비했지만, 여전히 완벽한 준비는 아닙니다. 은퇴 후 20~30년 동안 안정적인 생활을 유지하려면 지금의 자산으로는 충분하지 않을 수 있습니다. 특히 의료비나 장기 요양에 대한 준비가 부족하다면 큰 재정적 부담에 직면할 수 있습니다. 은퇴 후의 경제적 안정성을 확보하기 위해서는 보다 적극적인 자산 관리와 장기적인 재무 계획이 필요합니다. 더 이상 미루지 말고, 은퇴 후에도 안락한 생활을 지속할 수 있도록 지금부터 대비하는 것이 중요합니다.";
            products = [allProducts[4], allProducts[3], allProducts[1]];
            imageTitle = allGrandMatherImg[2].name;
            finalImage = allGrandMatherImg[2].path;
            imageRecommendation = allGrandMatherImg[2].text;
        } else if (totalScore <= 70) {
            status = "노후 성장 지향적이지만 신중한 접근";
            recommendation =
                "노후를 대비한 자산 관리가 비교적 잘 이루어졌습니다. 하지만 물가 상승, 의료비 증가, 예기치 못한 사고 등 다양한 변수는 언제든지 발생할 수 있습니다. 당신의 현재 자산이 그런 예기치 못한 상황에 충분히 대응할 수 있는지 다시 한 번 점검해볼 필요가 있습니다. 만약 지금보다 더 강력한 재정 계획을 세운다면 은퇴 후에도 재정적인 걱정 없이 더욱 여유롭게 생활할 수 있을 것입니다.";
            products = [allProducts[4], allProducts[2], allProducts[3]];
            imageTitle = allGrandMatherImg[3].name;
            finalImage = allGrandMatherImg[3].path;
            imageRecommendation = allGrandMatherImg[3].text;
        } else if (totalScore <= 80) {
            status = "노후의 성장 및 안정성 중시";
            recommendation =
                "당신은 노후 준비를 잘 해왔고, 은퇴 후에도 안정적인 생활을 유지할 수 있는 자산을 보유하고 있습니다. 하지만 여전히 예기치 못한 변수들이 당신의 자산을 위협할 수 있음을 기억해야 합니다. 지금부터 더 효율적인 자산 운용 전략을 세우고, 부동산이나 토지와 같은 안전한 자산에 투자하여 자산을 더욱 증대시키는 것도 좋은 방법이 될 수 있습니다. 이미 잘 해오셨지만, 조금 더 적극적으로 준비한다면 당신의 은퇴 생활은 더욱 안정되고 여유로울 것입니다.";
            products = [allProducts[4], allProducts[0], allProducts[1]];
            imageTitle = allGrandMatherImg[4].name;
            finalImage = allGrandMatherImg[4].path;
            imageRecommendation = allGrandMatherImg[4].text;
        } else {
            status = "준비 완료";
            recommendation =
                "당신은 준비를 잘 해왔습니다. 노후에도 추가적인 자산을 늘리기 위해서는 매우 적극적으로 준비하시길 권장드립니다.";
            products = [allProducts[4], allProducts[3], allProducts[2]];
            imageTitle = allGrandMatherImg[4].name;
            finalImage = allGrandMatherImg[4].path;
            imageRecommendation = allGrandMatherImg[4].text;
        }

        return { totalScore, status, recommendation, products, imageTitle, finalImage, imageRecommendation };
    };

    const {
        totalScore,
        status,
        recommendation,
        products,
        imageTitle,
        imageRecommendation,
        finalImage: resultImage,
    } = calculateResult();
    const [finalImage, setFinalImage] = useState("");

    const restartQuiz = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setSelectedAnswers(Array(questions.length).fill(null));
        navigate("/question");
    };

    const imageClick = () => {
        setFinalImage(false);
    };

    // 결과를 계산한 후 상태에 finalImage 저장
    useEffect(() => {
        setFinalImage(resultImage);
    }, [resultImage]);

    return (
        <div className="w-full max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {userInfo?.properties?.nickname
                    ? `${userInfo.properties.nickname}님의 노후 준비 결과`
                    : "노후 준비 결과"}
            </h2>
            <div className="p-4 mb-4 bg-blue-100 rounded-lg">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-blue-800">
                        총점: {totalScore} / {questions.length * 4}
                    </p>
                    <button
                        className="text-lg font-semibold text-blue-800 hover:shadow-lg transition-shadow duration-300 rounded-lg "
                        onClick={imageClick}
                    >
                        추천상품 Top 3
                    </button>
                </div>
                <p className="text-lg font-semibold text-blue-800">노후 준비 상태: {status}</p>
            </div>
            <div className="mb-6">
                {imageTitle && <h1 className="mb-4 font-normal text-2xl">{imageTitle}</h1>}
                {finalImage ? (
                    <>
                        <img
                            onClick={imageClick}
                            src={finalImage}
                            alt={allGrandMatherImg[4].name}
                            className="w-auto h-auto"
                        />
                        {imageRecommendation && (
                            <p className="bg-gray-100 p-4 rounded-md text-lg mt-5">{imageRecommendation}</p>
                        )}
                    </>
                ) : (
                    <>
                        <p className="mb-4 text-base text-gray-700 pb-3">{recommendation}</p>
                        <hr className="border-t border-gray-300 my-4 pb-3" />
                        <h3 className="mb-2 text-xl font-bold text-center text-gray-700 pb-3">추천 상품 Top 3</h3>
                        <div className="w-full grid grid-cols-3 gap-4 ">
                            {products.map((product, index) => (
                                <p key={index} className="flex flex-col items-center font-semibold ">
                                    {index + 1}. {product.name}
                                </p>
                            ))}
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className=" flex flex-col items-center border border-gray-300 rounded-lg"
                                >
                                    <img src={product.path} alt={product.name} className="w-full h-auto" />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <button
                className="w-full px-4 py-2 text-base text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                onClick={restartQuiz}
            >
                다시 시작
            </button>
        </div>
    );
};

export default Result;
