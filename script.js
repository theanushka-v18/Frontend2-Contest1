/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];



function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((employee)=> {
    if(employee.profession=="developer") {
      console.log(employee.name);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((employee) => {
    if(employee.profession=="developer") {
      console.log(employee.name);
    }
  })
}

function addData() {
  //Write your code here
  const newObj = {
    id : 4,
    name : "susan",
    age : 20,
    profession : "intern"
  }
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  arr.map((employee) => {
    if(employee.profession=="admin") {
      arr.pop();
    }
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  const newArr = [
    {
      id : 5,
      name : "Anushka",
      course : "BCA",
      passoutYear : 2022
    },
    {
      id : 6,
      name : "Mahak",
      course : "BBA",
      passoutYear : 2025
    },
    {
      id : 7,
      name : "Tanya",
      course : "BBA",
      passoutYear : 2022
    }
  ];
  const modifiedArr = arr.concat(newArr);
  console.log(modifiedArr);
}
