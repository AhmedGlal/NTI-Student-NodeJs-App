// Init File System
const fs = require('fs');
// Add Student
const addStudent = (id, name, degree) => {
  const student = loadStudent();
  const duplicated = student.filter((x) => {
    return x.id === id;
  })

  if (duplicated.length == 0) {
    let total = 0;
    degree.forEach((d) => {
      total += d;
    })
    student.push({
      id,
      name,
      degree,
      total
    })
    saveStudent(student);
    console.log("Data has been added successfully");

  } else {
    console.log('Data is already exsist');
  }
};
// Delete Student
const deleteStudent = (id)=>{
   const student = loadStudent()
   const duplicated = student.filter((x)=>{
       return x.id !==id;
   })
   if(student.length !== duplicated.length)
   {
    saveStudent(duplicated)
    console.log('Deleted !');

   }else{
       console.log('Not Found');
   }
};

// Read Student
const readStudent = (id)=>{
    const student = loadStudent()
    const selectedStd = student.find((x)=>{
        return x.id === id;
    })
    if(selectedStd){
        console.log(selectedStd);
    }else{
        console.log('Not Found !');
    }
};

// List Student
const listStudent = ()=>{
    const student= loadStudent()
    student.forEach(x => {
        console.log(x);
    });
};

// Load Data
const loadStudent = ()=>{
   try{
    const data = fs.readFileSync('student.json').toString();
    return JSON.parse(data);
   }
   catch(e){
       return [];
   }
};
// Save Data
const saveStudent = (student)=>{
    const saveStd = JSON.stringify(student);
     fs.writeFileSync('student.json',saveStd);
};
// Export Data
module.exports={
    addStudent,
    deleteStudent,
    listStudent,
    readStudent
};
