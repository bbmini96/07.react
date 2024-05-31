import React, { useState, useRef } from 'react';




export default function Student({ id, name, onDelete, onUpdate, isAbsent }) {
    return(
        <div>
            <span onClick={() => onUpdate(id)} style={{
                textDecoration: isAbsent? 'line-through':'none',
                color: isAbsent? 'red':'black'
            }}>{name}</span> &nbsp;&nbsp;
            <span><button onClick={ () => onDelete(id)}> X </button>
            </span>
        </div>
    )  
}
