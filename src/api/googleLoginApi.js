const redirect_uri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const SocialGoogle = () => {
    const scope = "profile email https://www.googleapis.com/auth/user.phonenumbers.read";

    const handleLogin = () => {
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=google`;
        window.location.href = googleAuthUrl;
    };

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
