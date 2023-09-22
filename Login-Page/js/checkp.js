var result;

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/patient');
    xhr.onload = function() {
        if (xhr.status === 200,xhr.readyState==4) {
            const data = JSON.parse(xhr.response);
             result=data.result;
             console.log("test", result);
             display()
        } else {
            console.error('Error:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Error:', xhr.statusText);
    };
    xhr.send();
}
 
  









function display() {
    
    
    
    var cartona = "";
    for (var i = 0; i < result.length; i++) {
        cartona += `
            <tr>
                
                <td>${result[i].Fname} ${result[i].Lname}</td>
                <td>${result[i].Department_name}</td>
                <td>${result[i].Age}</td>
                <td>${result[i].PhoneNum}</td>
                <td>${result[i].RoomID}</td>
                <td>${result[i].PSSN}</td>
                <td>${result[i].gender}</td>
                

            </tr>`;
    }
    // Add the generated rows to the tbody of the table
    document.getElementById("tbody").innerHTML=cartona;
}
getData();
 
  