const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

const SocialKakao = () => {
    const handleLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
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
