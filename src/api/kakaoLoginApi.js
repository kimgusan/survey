import { customAxios } from "./customAxios";

const SocialKakao = () => {
    const handleLogin = async () => {
        try {
            const response = await customAxios().get("/auth/kakao/authorize");
            window.location.href = response.data.url;
        } catch (error) {
            console.error("Failed to redirect to Kakao Login", error);
        }
    };

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
