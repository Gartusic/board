import React from 'react';
import Time from '../component/time';
import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <Time />
            <Link to={`/`}><button>홈화면으로</button></Link>
            <Link to={`/board`}><button>게시판</button></Link>
            <Link to={`/write`}><button>글쓰기</button></Link>
            <Outlet />
            {/* Outlet 태그는 children 라우트들의 위치를 정의하는데에 쓰인다. (index.tsx참고)*/}
        </div>
    );
};

export default RootLayout;