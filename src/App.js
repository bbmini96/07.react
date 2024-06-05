import './App.css';
import React, { useState, useRef, useReducer } from 'react';
import Student from './components/Student.js';
import styled from "styled-components";


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

const reducer = (state, action) => {
  // console.log(action)

  switch (action.type) {
    case 'add-list':
    const presentStudent = {
      id: ++action.payload.currentStudentId.current,
      name: action.payload.name,
      isAbsent: false
    }
    // console.log(action.payload.id);

    return {
      // count: ++studentTotal.current,
      count: ++action.payload.studentTotal.current,
      students: [
        ...state.students,presentStudent
      ]
    };

    // case 'delete-student':
    //   return({
    //     count: --action.payload.studentTotal.current,
    //     students: state.students.filter(
    //       (student) => action.payload.currentStudentId.current !== id
    //     )
    //   })
      
    default:
      return state;
  }
}



function App() {
  const [name, setName] = useState('');
  const [attendanceInfo, setAttendanceInfo] = useState(initialAttendanceInfo);
  const [attendanceInfo2, dispatch] = useReducer(reducer, initialAttendanceInfo);

  const studentTotal = useRef(1);
  console.log('total : ', studentTotal.current)
  
  const currentStudentId = useRef(1);
  console.log('currentId : ', currentStudentId.current)


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


  const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
`
  const Title = styled.h1`
  text-align: center;
  background-color: yellow;
  `
  const Attendance = styled(Title)`
    color: red;
  `


  return (
    <Wrapper>
    <div>
      <Title as="h1" >Attendance</Title>
      <Attendance as="p">Attendance List Total : {attendanceInfo.count}</Attendance>


      <div>
        <input
          type='text'
          placeholder='Input the student name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
             
        <button onClick={() => dispatch({payload:{name, currentStudentId, studentTotal}, type:'add-list'})}>Add(reducer)</button>

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
    </Wrapper>
  );
}


export default App;