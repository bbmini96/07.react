import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function FileDownload(){
    const { noticeNo } = useParams();
    const [files, setFiles] = useState([]);

    useState(() => {
        axios.get(`/api/notice/${noticeNo}/files`)
            .then(response => setFiles(response.data));
    }, [])

    return(
        <div>
            <h1>File Download</h1>
            <div>
                {files && files.map(file => (
                    <li key={file.attachmentFileNo}>
                        <a href={`/api/notice/files/${file.attachmentFileNo}`}>
                            {file.attachmentOriginalFileName}
                        </a>
                    </li>
                ))}                
            </div>
        </div>
    )
}