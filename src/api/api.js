// import KakaoLogin from "react-kakao-login";

// export const SocialKakao = () => {
//     const Rest_api_key = "2c96481d59a235c57305c9a61b026480"; //REST API KEY
//     const redirect_uri = "http://127.0.0.1:3000/question/"; //Redirect URI

//     // oauth 요청 URL
//     const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
//     const handleLogin = () => {
//         window.location.href = kakaoURL;
//         // fetch(kakaoURL).then((response) => response.json());
//     };
//     return (
//         <>
//             <button
//                 className="flex items-center justify-center w-full px-4 py-2 text-sm text-center transition-colors duration-200 rounded-lg"
//                 onClick={handleLogin}
//             >
//                 카카오 로그인
//             </button>
//             {/* <KakaoLogin /> */}
//         </>
//     );
// };
// export default SocialKakao;

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

import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { getToken } from "./question";

const client_id = "2c96481d59a235c57305c9a61b026480";
const redirect_uri = "http://127.0.0.1:3000/question/";

const SocialKakao = () => {
    // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    // const handleLogin = () => {
    //     window.location.href = kakaoURL;
    // };

    useEffect(() => {
        const search = new URLSearchParams(window.location.search); // http://localhost~~~
        const code = search.get("code"); // asdkqwod
        const accessToken = localStorage.getItem("access_token");
        // 카카오로부터 리다이렉트 당한경우 code in
        // if (code && !accessToken === "undifind") {
        // if (code) {
        //     // POST / oauth/token 을 날린다. (서버에서 날려야함)
        //     handleGetToken();
        // }
    }, []); // 최초 진입시 발동(1. 찐 최초 / 2. 카카오로부터 리다이렉트 당해서 진입)

    // const handleGetToken = async () => {
    //     // 본래라면 여기서 서버 요청 -> 그 백엔드 서버에서 또 카카오로 요청
    //     // 나는 프론트에서 카카오로 날림
    //     const { access_token } = await getToken();

    //     localStorage.setItem("access_token", access_token);
    // };
    return (
        <>
            <button
                className="flex items-center justify-center w-full px-4 py-2 text-sm text-center transition-colors duration-200 rounded-lg"
                // onClick={handleLogin}
            >
                카카오 로그인
            </button>
        </>
    );
};

export default SocialKakao;
