import KakaoLogin from "react-kakao-login";

export const SocialKakao = () => {
    const Rest_api_key = "2c96481d59a235c57305c9a61b026480"; //REST API KEY
    const redirect_uri = "http://localhost.com:3000/auth/kyusan"; //Redirect URI
    // const redirect_uri = "http://localhost.com:3000/questionnaire"; //Redirect URI

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const handleLogin = () => {
        // window.location.href = kakaoURL;
        fetch(kakaoURL).then((response) => response.json());
    };
    return (
        <>
            {/* <button onClick={handleLogin}>카카오 로그인</button> */}
            <KakaoLogin />
            {/* <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} /> */}
        </>
    );
};
export default SocialKakao;

// export const SocialKakao = () => {
//     const kakaoClientId = "52b170a9f4ec9bffd1b13db19e742767";
//     const kakaoOnSuccess = async (data) => {
//         console.log(data);
//         const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
//     };
//     const kakaoOnFailure = (error) => {
//         console.log(error);
//     };
//     return (
//         <>
//             <KakaoLogin token={kakaoClientId} onSuccess={kakaoOnSuccess} onFail={kakaoOnFailure} />
//         </>
//     );
// };

// export default SocialKakao;
