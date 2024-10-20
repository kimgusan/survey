// components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-100 to-purple-100" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            <Outlet /> {/* 자식 컴포넌트가 렌더링되는 위치 */}
        </div>
    );
};

export default Layout;
