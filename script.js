let btn= document.getElementById('btn');
let data=document.getElementById('data');

let countn=document.querySelector(".count");
let err=document.querySelector('#err');
let n=0;
let arr=[
  
];

function addDetails(i, addname, profesn, agee) {
  let temp = { id: i, name: addname, profession: profesn, age: agee };
  arr.push(temp);

  // Create a list item
  let list = document.createElement('li');
  list.innerHTML = `${temp.id} Name: ${temp.name} Profession: ${temp.profession} Age: ${temp.age}`;

  // Create a delete button
  let btn = document.createElement('button');
  btn.className = "btn";
  btn.innerHTML = "Delete";
  list.appendChild(btn);

  // Add click event listener to the delete button
  btn.addEventListener('click', () => {
    // Find the index of the item in the array
    let index = arr.findIndex(elem => elem.id === temp.id);
    if (index !== -1) {
      arr.splice(index, 1); // Remove the item from the array
    }
    list.remove(); // Remove the list item from the DOM
  });

  // Append the list item to the 'data' element
  let addedData = document.getElementById('data');
  addedData.appendChild(list);
}





btn.addEventListener('click',(e)=>{
  e.preventDefault();
  const name=document.getElementById('name').value;
  const profession=document.getElementById('profession').value;
  const age= document.getElementById('age').value;
  if(name==='' || profession=== '' || age===''){
    err.innerText="Error : Please Make sure All the fields are filled before adding in an employee !";
  }
  else{
    err.innerText="Success : Employee Added!"  ;
    err.style.color="green";
    addDetails(n,name,profession,age);
    n=n+1;
    countn.innerText=n;
  }
})
