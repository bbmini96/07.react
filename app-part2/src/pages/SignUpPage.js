import { useState } from "react";
import { signUp } from "../api/auth/AuthAPI";
import { useNavigate } from "react-router";

export default function SignUpPage() {
    const [values, setValues] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = async (e) => {
        //
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 
        
        signUp(values)
        .then((response) => {

        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">아이디</label>
                        <input type="text" id="username" onChange={handleChange} value={values.username} />
                    </div>
                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" onChange={handleChange} value={values.password} />
                    </div>
                    <div>
                        <button type="submit">회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
}