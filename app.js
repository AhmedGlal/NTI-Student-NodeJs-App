const yargs = require("yargs");
const student = require("./student");


// Add Students
yargs.command({
    command:'add',
    describe:'Add Your Students',
    builder:{
        id:{
            describe:'Students ID',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'Students Names',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'Students Degrees',
            type: 'array'
        },
    },
    handler:(addStd)=>{
        student.addStudent(addStd.id,addStd.name,addStd.degree)
    }
})

// Delete Students
yargs.command({
    command:'delete',
    describe:'Delete Your Students',
    builder:{
      id:{
          describe:'Students ID For Delete',
          demandOption:true,
          type:'number'
      }
    },
    handler:(delStd)=>{
        student.deleteStudent(delStd.id)
    }
})

// Read Students
yargs.command({
    command:'read',
    describe:'Read Your Students',
    handler:(readStd)=>{
        student.readStudent(readStd.id)
    }
})

// List Students
yargs.command({
    command:'list',
    describe:'List Your Students ',
    handler:()=>{
        student.listStudent()
    }
})

//Show
yargs.parse();
