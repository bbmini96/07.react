import { Link } from "react-router-dom";
import App from "../App";

export function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
                <p>React 어렵다</p>
            </div>
            <button onClick={() => <Link to= "../App" state={null} />}>뒤로가기</button>
        </div>
    );

};
