import axios from "axios";
import React from "react";
import { useCookies } from "react-cookie";

export default function CookieTest() {

    const [cookies, setCookies, removeCookies] = useCookies(['key']);
    console.log(cookies)

    const save = () => {
        console.log("save");
        // setCookies("key","data");
    }
    const load = () => {
        console.log("load");
        console.log(cookies.key);
    }
    // api/login
    const server = () => {
        console.log("server");
        axios.post(`/api/login`, {id: 'admin'}, {withCredentials: true})
            .then(response => setCookies("id2",response.data.id))
            .catch(error => console.log(error))
    }

    const search = () => {

        axios.get(`/api/search`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h1>Cookie Test</h1>
            <button type="button" onClick={save}>save</button>
            <button type="button" onClick={load}>load</button>
            <button type="button" onClick={server}>server</button>
            <button type="button" onClick={search}>search</button>
        </div>
    )
}