const addContact = document.querySelector(".add-contact");
const contactName = document.getElementById("search");
const modal = document.querySelector(".container2");
const modal2 = document.querySelector(".modal2");
const cancelIcon = document.querySelector(".cancel-icon");
const deleteContact = document.querySelector(".del-contact");
const table = document.querySelector(".table1");

const secondModal = document.querySelector(".form-two");
const clearModal = document.querySelector(".cancel-icon");
const modalInput = document.querySelector(".modal-input");
const fullName = document.querySelector(".fullname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const contactRow = document.querySelector(".contactRow");
const firstname = document.querySelector(".first");
const emailaddress = document.querySelector(".your-mail");
const lastName = document.querySelector(".yourLastName");
const phoneNo = document.querySelector(".your-num");
const cancelElement = document.querySelector(".cancel");
const addElement = document.querySelector(".add-con");
const editContact = document.querySelector(".edit-contact");
const cancelContact = document.querySelector(".cancel-contact");
const form = document.querySelector("form");
// const contacts = [];

// const newContact = (fullName, email, phone) => {};

// const createNewContact = () => {
//   const contactRow = document.createElement("div");
//   const contactTable = document.createElement("Table");
//   const contactTable = document.createElement("tr");
//   const contactTable = document.createElement("td");
//   const contactTable = document.createElement("td");
//   const contactTable = document.createElement("td");
// };

addContact.addEventListener("click", function () {
  modal.style.visibility = "visible";
  console.log(form);
});

cancelIcon.addEventListener("click", function () {
  modal.style.visibility = "hidden";
});

cancelElement.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  console.log("e");
});

addElement.addEventListener("mouseenter", function () {
  addElement.textContent = "SAVE";
});

addElement.addEventListener("mouseleave", function () {
  addElement.textContent = "ADD CONTACT";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("ok");
  let num = 1;
  table.insertAdjacentHTML(
    "beforeEnd",
    `<tr class="table-row" >
           <td>
           <input type="checkbox" class="myCheckbox myCheckbox${++num}">
           <td>${firstname.value}&nbsp;&nbsp;&nbsp;${lastName.value}</td>
           <td>${emailaddress.value}</td>
           <td>${phoneNo.value}</td>
           <td>
             <img src="/images/delete-icon.png"  class="img-del" alt="" />
           </td>
         </tr>`
  );
  modal.style.visibility = "hidden";
});

/* const deleteRow = document.querySelector(".img-del");*/

function deleteRow(event) {
  // Check if the clicked element has the class 'delete-icon'
  if (event.target.classList.contains("img-del")) {
    // Get the parent table row of the clicked icon

    const row = event.target.closest("tr");
    const checkbox = document.querySelector(".myCheckbox");
    console.log(checkbox);

    // Check if a row was found
    if (row) {
      if (checkbox && checkbox.checked) {
        // Remove the row from the DOM
        row.remove();
      }
      /*       checkbox.addEventListener("input", function () {});
       */
    }
  }
}

// Add event listener to the table to handle clicks on dynamically added delete icons
document.addEventListener("click", function (event) {
  // Check if the click event occurred inside the table
  if (event.target.closest("table")) {
    // Call the deleteRow function to handle the click
    deleteRow(event);
  }
});
/* 
function checkAllCheckboxes() {
  const checkAll = document.querySelector(".checkAll");
  const checkboxes = document.querySelectorAll("input [type ='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}
 */
const checkAll = document.querySelector(".checkAll");
checkAll.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".myCheckbox");
  if (checkAll.checked == true && table.children.length > 2) {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });

    console.log(checkboxes);
    console.log(table.children.length);

    deleteContact.style.visibility = "visible";
  } else {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    deleteContact.style.visibility = "hidden";
  }
});
//Event listener to delete all rows
/* 
deleteContact.addEventListener("click", function () {
  // Get all the checkboxes
  const checkboxes = document.querySelectorAll(".myCheckbox");

  // Iterate over each checkbox
  checkboxes.forEach(function (checkbox) {
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Get the parent row of the checked checkbox
      const row = checkbox.closest("tr");
      
      // Check if a row was found
      if (row) {
        // Remove the row from the DOM
        row.remove();
      }
    }
  })
 */
deleteContact.addEventListener("click", function () {
  //to get all checkboxes
  const checkboxes = document.querySelectorAll(".myCheckbox");
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      const row = checkbox.closest("tr");
      //check if row is found
      if (row) {
        row.remove();
      }
      deleteContact.style.visibility = "hidden";
    }
  });
});

const row = checkbox.closest("tr");
row.addEventListener("click", function () {
  modal2.style.visibility = "visible";
});
