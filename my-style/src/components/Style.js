import React from 'react';
// import '../assets/css/Style.css';
import '../assets/css/Style.scss';



export default function Style() {


    return (
        <>
            <nav class="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#" class="submenu-trigger">Menus</a>
                <ul class="submenu">
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                    <li><a href="#">Menu 4</a></li>
                    <li><a href="#">Menu 5</a></li>
                </ul>
                <a href="#">Contact</a>
            </nav>
            <div>
                <div class="box1">box1</div>
                <div class="box2">box2</div>
            </div>
        </>
    )


}
