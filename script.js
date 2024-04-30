const addContact = document.querySelector(".add-contact");
const contactName = document.getElementById("search");
const modal = document.querySelector(".container2");
const modal2 = document.querySelector(".modal2");
const cancelIcon = document.querySelector(".cancel-icon");
const deleteContact = document.querySelector(".del-contact");
const table = document.querySelector(".table1");

const secondModal = document.querySelector(".form-two");
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
let currentRow;

const init = function () {
  emailaddress.value = " ";
  phoneNo.value = " ";
  firstname.value = " ";
  lastName.value = " ";
};

window.addEventListener("load", function () {
  init();
});

addContact.addEventListener("click", function () {
  modal.style.visibility = "visible";
  modal2.style.visibility = "hidden";
  init();

  localStorage.setItem("table", JSON.stringify(table));
});

cancelIcon.addEventListener("click", function () {
  modal.style.visibility = "hidden";
});

cancelElement.addEventListener("click", function () {
  modal.style.visibility = "hidden";
});

addElement.addEventListener("mouseenter", function () {
  addElement.textContent = "SAVE";
});

addElement.addEventListener("mouseleave", function () {
  addElement.textContent = "ADD CONTACT";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  table.insertAdjacentHTML(
    "beforeEnd",
    `<tr class="table-row" >
           <td>
           <input type="checkbox" class="myCheckbox">
           <td>${firstname.value} ${lastName.value}</td>
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
    const checkbox = row.querySelector(".myCheckbox");
    console.log(checkbox);

    // Check if a row was found
    if (row) {
      if (checkbox && checkbox.checked) {
        // Remove the row from the DOM
        row.remove();
      }
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

const checkAll = document.querySelector(".checkAll");
checkAll.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".myCheckbox");
  if (checkAll.checked == true && table.children.length > 2) {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });

    deleteContact.style.visibility = "visible";
  } else {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    deleteContact.style.visibility = "hidden";
  }
});

//Event listener to delete all rows

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
      checkAll.checked = false;
    }
  });
});

// Define the populateModalWithRowData function outside of the event listener block
function fillModalWithRowData(clickedRow) {
  // Get the full name, email, and phone number from the clicked row
  const fullName = clickedRow
    .querySelector("td:nth-child(2)")
    .textContent.trim();
  const email = clickedRow.querySelector("td:nth-child(3)").textContent.trim();
  const phoneNumber = clickedRow
    .querySelector("td:nth-child(4)")
    .textContent.trim();

  // Set the values of modal2 inputs with the extracted data
  document.getElementById("fullname").value = fullName;
  document.getElementById("email").value = email;
  document.getElementById("no.").value = phoneNumber;
}

// Add event listener to handle clicks on the table rows
document.addEventListener("click", function (event) {
  // Check if the click event occurred inside the table
  if (event.target.closest(".table1 .table-row")) {
    // Get the clicked row
    currentRow = event.target.closest(".table-row");
    console.log(currentRow);

    // Check if the clicked element is not the checkbox or delete icon
    if (
      !event.target.classList.contains("myCheckbox") &&
      !event.target.classList.contains("img-del")
    ) {
      // Call the function to populate modal2 with row data
      fillModalWithRowData(currentRow);

      // Make second modal visible
      modal2.style.visibility = "visible";
    }
  }
});

//Event listener to remove and edit second modal
cancelContact.addEventListener("click", function () {
  modal2.style.visibility = "hidden";
});

editContact.addEventListener("click", function (event) {
  modal.style.visibility = "visible";
  modal2.style.visibility = "hidden";
  //getting my clicked row value
  emailaddress.value = document.getElementById("email").value;
  phoneNo.value = document.getElementById("no.").value;
  //getting my clicked row value of fullName
  const fullName = document.getElementById("fullname").value;
  const fullNameParts = fullName.split(" ");
  firstname.value = fullNameParts[0];
  lastName.value = fullNameParts.slice(1).join(" ");

  //geting clicked row
});
addElement.addEventListener("click", function () {
  currentRow.remove();
});
