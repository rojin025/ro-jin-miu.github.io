console.log("Exam Prep:");

// HomeWork 3

type Course = {
    id: number;
    title: string;
    description: string;
}; 

type Student = {
    id: number;
    name: string;
    courses: Course[];
};

let data_1 : readonly Student[] = Object.freeze([]);
let data_2 : { [student_id: string]: {name: string , courses: Course[]} } = Object.freeze({});

function addStudent_V1(new_student: Student): boolean{
    const stdExist = data_1.some( std => std.id === new_student.id);
    if(stdExist) return false;

    const new_data = [...data_1, new_student];
    data_1 = new_data;
    return true;
}

function addStudent_V2(new_student: Student): boolean{
    const stdExist = data_2.hasOwnProperty(new_student.id);
    if (stdExist) return false;

    const new_data = structuredClone(data_2);
    new_data[new_student.id] = {name: new_student.name, courses: []}
    data_2 = new_data;
    return true;
}

function getStudent_V1(student_id: number): Student | null{
    const stdExist = data_1.find(std => std.id === student_id)
    if (!stdExist) return null;

    return stdExist;
}
function getStudent_V2(student_id: number): Student | null {
    const stdExist = data_2.hasOwnProperty(student_id);
    if (!stdExist) return null;
    
    return {id: student_id, ...structuredClone(data_2[student_id])};
}

function updateStudent_V1(updateStudent: Student): boolean{
    if(!getStudent_V1(updateStudent.id)) return false;

    const updatedData = data_1.map( std => {   
        if(std.id === updateStudent.id ) return updateStudent;
        return std;
    });
    data_1 = updatedData;
    return true;
}

function updateStudent_V2(updateStudent: Student): boolean {
    if(!getStudent_V2(updateStudent.id)) return false;
    
    console.log("UPDATING");
    const {id, name, courses} = updateStudent
    const updatedData = structuredClone(data_2);
    updatedData[id] = { name , courses};
    data_2 = updatedData;
    return true;
}

function removeStudent_V1(stdId: number): boolean{
    if(!getStudent_V1(stdId)) return false;

    const newData = data_1.filter(std => std.id !== stdId);
    data_1 = newData;
    return true;
}
function removeStudent_V2(stdId: number): boolean{
    if(!getStudent_V2(stdId)) return false;

    const newData = structuredClone(data_2);
    delete newData[stdId];
    data_2 = newData;
    return true;
}


// Adding 
addStudent_V2({
    id : 4,
    name: "Rojin",
    courses: [],
});
addStudent_V2({
    id : 5,
    name: "Suresh",
    courses: [],
});
addStudent_V1({
    id : 1,
    name: "Rojin",
    courses: [],
});
addStudent_V1({
    id : 2,
    name: "Suresh",
    courses: [],
});

// GetStd test
// console.log("Getting Std with ID - 1 ",getStudent_V1(1));
// console.log("Getting Std with ID - 10 ",getStudent_V1(10));

// console.log("Getting Std with ID - 5 ",getStudent_V2(5));
// console.log("Getting Std with ID - 10 ",getStudent_V2(10));

console.log(data_1);
console.log("--------------------------------------------------------");
console.log(data_2);

// // Update
// updateStudent_V1({
//     id : 1,
//     name: "Zeus",
//     courses: [],
// });

// console.log(updateStudent_V1({
//     id : 100,
//     name: "Zeus",
//     courses: [],
// }));

// updateStudent_V2({
//     id : 5,
//     name: "GOD",
//     courses: [],
// });

// console.log(updateStudent_V2({
//     id : 100,
//     name: "Zeus",
//     courses: [],
// }));

// // Removing 
// console.log(removeStudent_V1(2)? "Successfully Removed" : "Cannot find the Student!");
// console.log(removeStudent_V1(2)? "Successfully Removed" : "Cannot find the Student!");

console.log(removeStudent_V2(5)? "Successfully Removed" : "Cannot find the Student!");
console.log(removeStudent_V2(2)? "Successfully Removed" : "Cannot find the Student!");

console.log("Updated Data: ",data_1);
console.log("Updated Data: ",data_2);

// const stdObj = {
//     '4': { name: 'Rojin', course: [{id:1, title:"WAP",description: "wap-500" }] },
//     '5': { name: 'Suresh', course: [] }
//   }

// const stdObjClone = {id: 4, ...structuredClone(stdObj[4])};
// console.log(stdObjClone);
// // console.log({id: 4 ,...stdObj[4]});


// Array method practice

function convertTitleCase(title: string ): string{
    const capitalize = (str:string) => str[0].toUpperCase() + str.slice(1);

    const exceptions = ["an", "or", "and", "in", "on", "the"];

    const titleCase  = title
        .toLowerCase()
        .split(" ")
        .map( word => exceptions.includes(word)? word : capitalize(word))
        .join(" ");
    return capitalize(titleCase);
}

console.log(convertTitleCase("hello world!!! THIS is the title or an TITLE!"));
