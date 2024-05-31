import React from "react";
import { Outlet } from "react-router-dom";

// home
export function Home() {
    return (
        <div>
            <h1>[ 홈페이지 ]</h1>
            <nav>
                <li>
                    <a href="/about">회사소개</a>
                </li>
                <li>이벤트</li>
                <li>제품</li>
                <li>고객지원</li>
            </nav>
        </div>
    );
}

// /about
export function About() {
    return (
        <div>
            <h1>[ 회사소개 ]</h1>
            <p>회사소개</p>
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
export function Products() {
    return (
        <div>
            <h1>[ 제품 ]</h1>
            <p>제품번호 : productId</p>
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
