import { customAxios } from "./customAxios";
// import { Browser } from "@capacitor/browser";

const SocialKakao = () => {
    const handleLogin = async () => {
        try {
            const response = await customAxios().get("/auth/kakao/authorize");
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Failed to redirect to Kakao Login", error);
        }
    };
    // 모바일에서 사용 시 유용하게 사용하기 위한 기능. (모바일 빌드 시 사용)
    // const handleLogin = async () => {
    //     try {
    //         const response = await customAxios().get("/auth/kakao/authorize");
    //         await Browser.open({ url: response.data.url }); // 외부 브라우저에서 열기
    //     } catch (error) {
    //         console.error("Failed to open browser for Kakao Login", error);
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
