import './App.css';
import React, { useState, useRef, useReducer } from 'react';
import Student from './components/Student.js';


const initialAttendanceInfo = {
  count: 1,
  students: [
    {
      id: 1,
      name: 'IT',
      isAbsent: false
    }
  ]
}

const reducer = (state,action) => {
  switch (action.type) {
    case 'add-list':
    const presentStudent = {
      // id: currentStudentId.current += 1,
      id: action.payload.id +=1,
      name: action.payload.name,
      isAbsent: false
    }
    console.log(presentStudent);

    return {
      // count: ++studentTotal.current,
      count: ++action.count,
      students: [
        ...state.students,presentStudent
      ]
    };
    default:
      return state;
  }
}


function App() {
  const [name, setName] = useState('');
  const [attendanceInfo, setAttendanceInfo] = useState(initialAttendanceInfo);
  const [attendanceInfo2, dispatch] = useReducer(reducer, initialAttendanceInfo);

  const studentTotal = useRef(1);
  const currentStudentId = useRef(1);

  


  const onAdd = () => {

    const presentStudent = {
      id: currentStudentId.current += 1,
      name: name,
      isAbsent: false
    }

    setAttendanceInfo({
      // count: ++studentTotal.current,
      count: ++studentTotal.current,
      students: [
        ...attendanceInfo.students,presentStudent
      ]
    })
    
  }


  const onDelete = (id) => {
        setAttendanceInfo({
          count: studentTotal.current -1,
          students: attendanceInfo.students.filter(
            (student) => student.id !== id
          )
        })
  }

  const onUpdate = (id) => {
    setAttendanceInfo({
      count:studentTotal.current,
      students: attendanceInfo.students.map(
        (student) =>  student.id ===id?{...student,isAbsent:!student.isAbsent}:student
      )
    })
  }

  return (
    <div>
      <h1>Attendance</h1>
      <p>Attendance List Total : {attendanceInfo.count}</p>


      <div>
        <input
          type='text'
          placeholder='Input the student name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       
        <button onClick={() => onAdd()}>Add</button>        
        <button onClick={() => dispatch({payload:{name}, type:'add-list'})}>Add(reducer)</button>

      </div>
      <div>
        {/* {attendanceInfo.students.map((student) => { */}
        {attendanceInfo2.students && attendanceInfo2.students.map((student) => {
          return <Student 
                  key={student.id} 
                  name={student.name} 
                  id ={student.id} 
                  isAbsent={student.isAbsent}
                  onDelete={onDelete} 
                  onUpdate={onUpdate}                  
          />;
        })}
      </div>
    </div>
  );
}


export default App;