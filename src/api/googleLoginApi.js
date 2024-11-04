import { customAxios } from "../api/customAxios";

const SocialGoogle = () => {
    const handleLogin = async () => {
        try {
            const response = await customAxios().get("/auth/google/authorize");
            // 백엔드에서 Google 인증 페이지로 리다이렉트 되도록 설정된 응답을 받습니다.
            window.location.href = response.data.url; // JSON 객체에서 URL을 가져옴
        } catch (error) {
            console.error("Failed to redirect to Google login", error);
        }
    };
    // 모바일에서 사용 시 유용하게 사용하기 위한 기능. (모바일 빌드 시 사용)
    // const handleLogin = async () => {
    //     try {
    //         const response = await customAxios().get("/auth/google/authorize");
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
                            src={`${process.env.PUBLIC_URL}/loginIcon/btn_google.svg`}
                            alt="Google"
                            className="w-full h-full"
                        />
                    </button>
                </div>
                <div className="flex flex-col items-center"></div>
            </div>
            <div className="flex items-center justify-between"></div>
        </>
    );
};

export default SocialGoogle;
