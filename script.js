let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "admin" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

// To append Another Arrays of Object.
// Use the spread operator to append into the array another object of the same structure of your choice
let arr1 = [
    { id: 4, name: "Shubham", age: "23", profession: "developer" },
    { id: 5, name: "Prathamesh", age: "24", profession: "admin" },
    { id: 6, name: "Prashik", age: "23", profession: "developer" }
];

arr = [...arr, ...arr1];



// Map Function
// Use the map function to iterate over all of the ages and make it an Int instead of the string.
arr.map(element => {
    element.age = parseInt(element.age);
});



// forEach Function
// Use the forEach function to edit the object which has the name john and change his age from 18 to 19
arr.forEach(element => {
    if (element.name === "john") {
        element.age = 19;
    }
});



// 1. Create an input type of select called profession and let the 2 options of this dropdown be "developer" and "admin".
// 2. On clicking the filter button in the ui, filter the cards according to their profession.
// 3. Use the filter function to filter all the employees of the profession which has been selected in the dropdown.
// 4. If no profession is selected throw an alert asking the user to select a profession before clicking the button.


let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");


function filterByProfession() {
    result.innerHTML="";
    let dropdownValue = dropdown.value;

    if(dropdownValue == "Profession"){
        alert("Please Select a Profession");
        return;
    }

    arr.forEach(element => {
        if(element.profession === dropdownValue ) {
            let div = document.createElement("div");
            div.innerText = element.id + " Name:"  + element.name + " Profession:" + element.profession + " Age:" + element.age;
            result.appendChild(div);
        }
    });
}

btn.addEventListener("click", filterByProfession);
