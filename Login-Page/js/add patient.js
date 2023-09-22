
// function logFormData() {
//   let fname = document.getElementById("Fname").value;
//   let lname = document.getElementById("Lname").value;
//   let ssn = Number(document.getElementById("PSSN").value);
//   let address = document.getElementById("Address").value;
//   let DOB = Number(document.getElementById("DOB").value);
//   let roomnumber = Number(document.getElementById("roomnum").value);
//   let Department = document.getElementById("Department").value;
//   let gender = document.querySelector('input[name="gender"]:checked').value;
//   let Phone_No = document.getElementById("Phone_No").value;

//   console.log("First Name: ", fname);
//   console.log("Last Name: ", lname);
//   console.log("SSN: ", ssn);
//   console.log("Address: ", address);
//   console.log("DOB: ", DOB);
//   console.log("Room Number: ", roomnumber);
//   console.log("Department: ", Department);
//   console.log("Gender: ", gender);
//   console.log("Phone Number: ", Phone_No);
// }

function submitForm() {


 let fname = document.getElementById("Fname").value;
  let lname = document.getElementById("Lname").value;
  let ssn = Number(document.getElementById("PSSN").value);
  let address = document.getElementById("Address").value;
  let DOB = Number(document.getElementById("DOB").value);
  let roomnumber = Number(document.getElementById("roomnum").value);
  let Department = document.getElementById("Department").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let Phone_No = document.getElementById("Phone_No").value;
  
  


 

  var xhr = new XMLHttpRequest();

  xhr.open('POST', " http://localhost:3000/patient", true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Set up a callback function for when the request completes
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.readyState==4) {
      // Request was successful, handle response data here
      console.log(xhr.responseText);
    } else {
      // Request failed, handle error here
      console.error('Request failed. Error code:', xhr.status);
    }
  };

  // Prepare the request body data
  var data = {

    PSSN:ssn,
    Fname:fname,
    Lname:lname,
    gender:gender,
    Age:DOB,
    Address:address,
    PhoneNum:Phone_No,
    RoomID:roomnumber,
    Department_name:Department
    
  }

  console.log("data", data);
  // Convert the data to a JSON string
  var jsonData = JSON.stringify(data);

  // Send the request with the JSON data as the request body
  xhr.send(jsonData);
  }
  





