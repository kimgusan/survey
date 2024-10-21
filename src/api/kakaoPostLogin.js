export const getToken = async () => {
    const search = new URLSearchParams(window.location.search);
    const code = search.get("code");
    console.log(code);
    if (!code) {
        return {};
    }

    // API 호출
    const response = await fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: "52b170a9f4ec9bffd1b13db19e742767",
            redirect_uri: "http://127.0.0.1:3000/submitsummary/",
            code: code,
        }).toString(),
    });

    const result = await response.json();
    console.log("result", result);

    return result;
};
