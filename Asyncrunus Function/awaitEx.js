let employees=[{id:101,name:"Rahul",salary:45000},
    {id:102,name:"Sonia",salary:55000}
]
let createEmployee=(emp,callback)=>{
setTimeout(()=>{
employees.push(emp)
},4000)
}

let displayData=()=>{
setTimeout(()=>{
let rows=''
for(emp of employees){
 rows=rows+`<tr>
 <td>${emp.id}</td>
 <td>${emp.name}</td>
 <td>${emp.salary}</td>
 </tr>`
}
document.getElementById('abc').innerHTML=rows
},2000)
}

let lunchTime=async()=>{
    await createEmployee({id:103,name:"Swati",salary:85000})
    displayData()
}
lunchTime();