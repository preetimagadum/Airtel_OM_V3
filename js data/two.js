let Employees=[
    {id:101,name:'preeti',salary:45000},
    {id:102,name:'shruti',salary:48000},
    {id:103,name:'prajwal',salary:40000},
 ]

function displayEmpData(){
    let rows=""
    for(emp of Employees){
        rows= rows + `<tr>
                      <td>${emp.id}</td>
                       <td>${emp.name}</td>
                        <td>${emp.salary}</td>
                    </tr>`
    }
    document.getElementById('t_data').innerHTML=rows
}