import { customAxios } from "./customAxios";
import { Browser } from "@capacitor/browser";
import { Http } from "@capacitor-community/http";

const API_SERVER = "https://api.returnplus.kr/";

const SocialKakao = () => {
    const handleLogin = async () => {
        try {
            const response = await customAxios().get("/auth/kakao/authorize");
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Failed to redirect to Kakao Login", error);
        }
    };
    // 모바일에서 사용하기 위한 기능. (모바일 빌드 시 사용, package.json 항목 수정 필요)
    // const handleLogin = async () => {
    //     try {
    //         const options = {
    //             url: `${API_SERVER}auth/kakao/authorize`,
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "ngrok-skip-browser-warning": "any-value", // ngrok 경고 무시
    //             },
    //             params: {}, // 빈 params 필드 추가하여 NullPointerException 방지
    //         };
    //         // API 요청 보내기
    //         const response = await Http.get(options);

    //         // Kakao 로그인 URL로 리디렉션
    //         await Browser.open({ url: response.data.url });
    //     } catch (error) {
    //         console.error("Failed to redirect to Kakao Login", error);
    //     }
    // };
    return (
        <>
            <div className="w-full grid gap-4 ">
                <div className="flex flex-col items-center">
                    <button className="ml-2 w-32 h-32 flex items-center justify-center" onClick={handleLogin}>
                        <img
                            src={`${process.env.PUBLIC_URL}/loginIcon/btn_kakao.svg`}
                            alt="KaKao"
                            className="w-full h-full"
                            style={{ pointerEvents: "none" }}
                        />
                    </button>
                </div>
                <div className="flex flex-col items-center"></div>
            </div>
            <div className="flex items-center justify-between"></div>
        </>
    );
};

export default SocialKakao;
