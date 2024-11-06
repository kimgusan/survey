// 설문조사 회원 정보를 구글 시트로 전송하는 api

export const handleSaveToSheet = async (userInfo, setUserInfo) => {
    const dataToSubmit = new FormData();
    const url = process.env.REACT_APP_GOOGLE_SHEET_URI;

    // 현재 날짜와 시간을 생성일자로 추가
    const createdDate = new Date().toLocaleString();
    dataToSubmit.append("create_date", createdDate);

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
        dataToSubmit.append("이름", name);
        dataToSubmit.append("핸드폰", phoneNumber);
        dataToSubmit.append("이메일", email);
    } else if (userInfo && userInfo.email) {
        const email = userInfo.email;
        dataToSubmit.append("이메일", email);
        dataToSubmit.append("핸드폰", "");
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            body: dataToSubmit,
        });
        if (!response.ok) {
            // 상태 코드와 함께 오류 로깅
            throw new Error(`Network response was not ok, status code: ${response.status}`);
        }
        setUserInfo(null);
    } catch (error) {
        console.error("Failed to save data", error);
        setUserInfo(null);
    }
};
