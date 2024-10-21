// // 설문조사 회원 정보를 구글 시트로 전송하는 api

export const handleSaveToSheet = async (userInfo) => {
    console.log(userInfo);
    if (userInfo && userInfo.kakao_account) {
        const { kakao_account } = userInfo;
        const name = kakao_account.name || "";
        const email = kakao_account.email || "";
        let phoneNumber = kakao_account.phone_number || "";

        // 전화번호 형식 조정
        if (phoneNumber.startsWith("+82")) {
            phoneNumber = "010" + phoneNumber.slice(3).replace(/\s/g, ""); // 국가 코드 제거 및 공백 제거
            phoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"); // 하이픈 추가
        } else {
            // 알 수 없는 국가 코드 또는 국가 코드 없이 제공된 경우
            phoneNumber = phoneNumber.replace(/\s/g, ""); // 최소한의 형식 정리
        }

        const dataToSubmit = new FormData();
        dataToSubmit.append("이름", name);
        dataToSubmit.append("핸드폰", phoneNumber);
        dataToSubmit.append("이메일", email);

        const url = process.env.REACT_APP_GOOGLE_SHEET_URI;
        try {
            const response = await fetch(url, {
                method: "POST",
                body: dataToSubmit,
            });
            if (!response.ok) {
                // 상태 코드와 함께 오류 로깅
                throw new Error(`Network response was not ok, status code: ${response.status}`);
            }
            // console.log("Data saved successfully");
        } catch (error) {
            console.error("Failed to save data", error);
        }
    } else {
        // console.error("User info is incomplete or email is not available");
    }
};
