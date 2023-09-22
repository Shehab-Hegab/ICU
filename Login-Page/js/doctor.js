
// const data = [
//   {
//     DSSN: "152030",
//     Doctor_name: "Ahmed Yousef",
//     Department: "Cardiac",
//   },
//   {
//     DSSN: "152031",
//     Doctor_name: "Ibrahim Hegazy",
//     Department: "Surgical",
//   },
//   {
//     DSSN: "152032",
//     Doctor_name: "Ibrahim Hegazy",
//     Department: "Surgical",
//   },
//   {
//     DSSN: "152033",
//     Doctor_name: "Ibrahim Hegazy",
//     Department: "Surgical",
//   },
//   {
//     DSSN: "152035",
//     Doctor_name: "Ibrahim Hegazy",
//     Department: "Surgical",
//   },
//   {
//     DSSN: "152037",
//     Doctor_name: "Ibrahim Amr",
//     Department: "Surgical",
//   },
//   {
//     DSSN: "152038",
//     Doctor_name: "Ashraf Sobhy",
//     Department: "Neonatal",
//   },
//   {
//     DSSN: "152039",
//     Doctor_name: "Ibrahim Yousef",
//     Department: "Medical",
//   },
// ];

// function display() {
//   var cartona = "";
//   for (var i = 0; i < data.length; i++) {
//     cartona += `
//       <tr>
//         <td>${data[i].DSSN}</td>
//         <td>${data[i].Doctor_name}</td>
//         <td>${data[i].Department}</td>
       
//         </td>
//       </tr>`;
//   }
//   // Add the generated rows to the tbody of the table
//   document.getElementById("tbody").innerHTML = cartona;

//   // Add event listeners to the delete buttons
//   var deleteButtons = document.querySelectorAll(".delete-button");
//   deleteButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       deleteItem();
//     });
//   });
// }

// // Call the display function to populate the table
// display();
