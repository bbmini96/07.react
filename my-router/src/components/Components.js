import {React, useState} from "react";

import { Link, Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";

// home
export function Home() {
    // 링크 연습!
    const [name, setName] = useState('IT');

    return (
        <div>
            <h1>[ 홈페이지 ]</h1>
            <nav>
                <li>
                    {/* rerendering */}
                    <a href="/about">회사소개</a>   
                </li>
                {/* a태그를 모방하지만 렌더링되지 않는다   */}
                <Link to="/about" state={name}>회사소개(Link)</Link>
                <li>이벤트</li>
                <li>제품</li>
                <li>고객지원</li>
            </nav>
        </div>
    );
}

// /about
export function About() {
    console.log(useLocation())
    return (
        <div>
            <h1>[ 회사소개 ]</h1>
            <p>회사소개</p>
            {/* 하위 컴포넌트까지 출력해주는 outlet */}
            <Outlet />      
        </div>
    );
}


// /about/service
export function Service() {
    return (
        <div>
            <h2>[ 서비스 ]</h2>
            <p>서비스</p>
        </div>
    );
}


// /about/history
export function History() {
    return (
        <div>
            <h2>[ 연혁 ]</h2>
            <p>연혁</p>
        </div>
    );
}


// /about/location
export function Location() {
    return (
        <div>
            <h2>[ 위치 ]</h2>
            <p>위치</p>
        </div>
    );
}


// /events
export function Events() {
    return (
        <div>
            <h1>[ 이벤트 ]</h1>
            <p>이벤트</p>
        </div>
    );
}

// QueryString: /products?productId=??
// URL Parameter => 훅꺼내기
export function Products() {
    // QueryString: useSearchParams
    const [searchParams, setSerchParams] = useSearchParams();
    const productId = searchParams.get('productId');

    // Link Params : useParmas
    const { urlProductId } = useParams();
    console.log( { urlProductId }); 


    return (
        <div>
            <h1>[ 제품 ]</h1>
            <p>제품번호 : {productId}</p>
            <p>제품번호 : {urlProductId}</p>
        </div>
    );
}
export function Contact() {
    return (
        <div>
            <h1>[ 고객지원 ]</h1>
            <p>고객지원</p>
        </div>
    );
}


export function NotFoundPage() {
    return <div>Page NotFound !!!</div>;
}
