const PrivacyPolicyNotice = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-lg max-w-4xl w-full text-black">
                <h1 className="text-4xl font-bold text-center mb-6">개인정보 처리방침</h1>
                <h2 className="text-2xl font-semibold mb-4">(주)대연피앤씨 개인정보 처리 방침</h2>
                <p className="mb-6">
                    (주)대연피앤씨(이하 ‘회사’)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련
                    법령에 따라 이용자의 개인정보를 보호하고, 이에 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
                    위해 다음과 같이 개인정보 처리방침을 두고 있습니다. 개인정보처리방침은 관련 법령, 지침, 고시 또는
                    회사 정책의 변경에 따라 변경될 수 있으며 변경 내용은 웹사이트를 통해 공지할 예정입니다.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">제1조 개인정보 수집 항목</h3>
                <p className="mb-4">
                    회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않으며,
                    이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
                    이행할 예정입니다.
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <strong>회원가입 시 수집될 수 있는 개인정보:</strong>
                        <ul className="list-disc list-inside ml-6">
                            <li>카카오 계정 (이름, 아이디, 이메일, 생년월일, 핸드폰번호)</li>
                            <li>구글 계정 (이름, 아이디, 이메일)</li>
                        </ul>
                    </li>
                    <li className="mt-1">
                        <strong>서비스 이용과정 및 처리과정에서 수집될 수 있는 개인정보:</strong>
                        <ul className="list-disc list-inside ml-6">
                            <li>수집항목: 쿠키, 서비스이용기록(IP, 방문일시, 불량이용기록 등)</li>
                            <li>수집방법: 자동 생성 정보</li>
                        </ul>
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">제2조 개인정보 수집 방법</h3>
                <p className="mb-6">회사는 아래와 같은 방법을 통해 개인정보를 수집합니다:</p>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는
                        경우
                    </li>
                    <li>
                        고객센터 및 담당직원을 통한 상담 과정에서 웹페이지, 메일, 팩스, 문자, 전화 등을 통해 이용자의
                        개인정보가 수집될 수 있습니다.
                    </li>
                    <li>오프라인에서 진행되는 이벤트, 세미나 등에서 서면을 통해 개인정보가 수집될 수 있습니다.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">제3조 개인정보 이용 목적</h3>
                <ul className="list-disc list-inside mb-6">
                    <li>회원가입 및 본인 인증</li>
                    <li>서비스 제공 및 맞춤형 서비스 제공</li>
                    <li>고객 상담 및 공지사항 전달</li>
                    <li>서비스 개선을 위한 통계 자료 생성</li>
                    <li>부정 이용 방지 및 법적 분쟁 대응</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">제4조 개인정보의 제3자 제공 및 위탁</h3>
                <p className="mb-6">
                    회사는 원칙적으로 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만, 다음과 같은 경우
                    예외로 합니다:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령에 따른 요구가 있는 경우</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">제5조 개인정보 보유 및 파기</h3>
                <p className="mb-6">
                    회사는 처리 목적이 달성되거나 법령에 따른 보존기간이 종료된 경우 개인정보를 파기합니다:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li>계약 및 청약철회 기록: 5년</li>
                    <li>대금 결제 및 재화 공급 기록: 5년</li>
                    <li>소비자 불만 및 분쟁 처리 기록: 3년</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">제6조 이용자의 권리</h3>
                <p className="mb-6">
                    이용자는 언제든지 개인정보에 대한 열람, 수정, 삭제, 처리 정지를 요청할 수 있습니다:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        탈퇴 및 문의:{" "}
                        <a href="mailto:deayeonpnc@gmail.com" className="text-blue-500 underline">
                            deayeonpnc@gmail.com
                        </a>
                    </li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">문의</h3>
                <p>
                    개인정보 보호 책임자: 최정만
                    <br />
                    이메일:{" "}
                    <a href="mailto:daeyeonpn@gmail.com" className="text-blue-500 underline">
                        deayeonpnc@gmail.com
                    </a>
                    <br />
                    전화: 010-0000-0000
                </p>
                <p className="mt-4">시행일자: 2024년 11월 5일</p>
            </div>
        </div>
    );
};

export default PrivacyPolicyNotice;
