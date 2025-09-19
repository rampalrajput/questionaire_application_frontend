import React, { useState, useEffect } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentDetails = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/'
        );
        if (!response.ok) {
          console.log('https erro', response.status);
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('error occured!', error);
      }
    };

    studentDetails();
  }, []);

  return (
    <>
      <h1> Studnets List </h1>
      <ul>
        {students.map((student, index) => (
          <React.Fragment key={index}>
             <h3> {student.name}  </h3>
            <li> name : {student.username} </li>
            <li> email : {student.email} </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default Students;
