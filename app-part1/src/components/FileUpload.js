import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function FileUpload(){

    const [files, setSetFiles] = useState([]);
    const navigate = useNavigate();
    
    const handleFileChange = (e) => {
        setSetFiles(Array.from(e.target.files));
        
    };

    const handleFileSubmit = (e) => {
        e.preventDefault();
        // 비동기 전송을 할때 파일 타입을 multipart타입으로 보내야 한다
        const formData = new FormData();    // html에서 form태그
        
        if(files != []){
            files.map((file) => {
                formData.append('files', file)
            })
        }
        axios.post(`/api/notice/101/files`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            let data = response.data;
            if(data.result === 1) {
                navigate('/file-download/notice/101')
            }else {
                console.log('에러 발생')
            }   
        })
        .catch(error => {console.log(error)})
    };

    return(
        <div>
            <h1>File Upload</h1>
            <form onSubmit={handleFileSubmit}>
                <input 
                    id="file-upload-input"
                    type="file"
                    name="files"
                    multiple
                    onChange={handleFileChange}
                />
                
                <button type="submit">
                    Upload
                </button>
            </form>
            <hr />
            <ul>
                {files && files.map((file, idx) => (
                    <li key={`file-${idx}`}>{file.name}</li>
                ))}
            </ul>
        </div>
    )
}