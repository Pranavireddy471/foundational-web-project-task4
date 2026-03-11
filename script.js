/* -----------------------------
TO DO LIST WITH LOCAL STORAGE
----------------------------- */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function displayTasks(){

let list = document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML = `
<span onclick="toggleTask(${index})"
style="cursor:pointer; text-decoration:${task.done?'line-through':'none'}">
${task.text}
</span>
<button onclick="deleteTask(${index})">X</button>
`;

list.appendChild(li);

});

}

function addTask(){

let input=document.getElementById("taskInput");

if(input.value==="") return;

tasks.push({text:input.value,done:false});

input.value="";

saveTasks();
displayTasks();

}

function toggleTask(i){

tasks[i].done=!tasks[i].done;

saveTasks();
displayTasks();

}

function deleteTask(i){

tasks.splice(i,1);

saveTasks();
displayTasks();

}

displayTasks();


/* -----------------------------
PRODUCT LISTING
----------------------------- */

const products=[

{name:"Laptop",category:"electronics",price:60000,rating:4.5,image:"https://via.placeholder.com/150"},
{name:"Phone",category:"electronics",price:20000,rating:4.2,image:"https://via.placeholder.com/150"},
{name:"T-Shirt",category:"clothing",price:800,rating:4.1,image:"https://via.placeholder.com/150"},
{name:"Headphones",category:"electronics",price:3000,rating:4.4,image:"https://via.placeholder.com/150"},
{name:"Jacket",category:"clothing",price:2000,rating:4.6,image:"https://via.placeholder.com/150"}

];

function displayProducts(){

let filter=document.getElementById("filter").value;
let sort=document.getElementById("sort").value;

let filtered=[...products];

if(filter!=="all"){
filtered=filtered.filter(p=>p.category===filter);
}

if(sort==="low"){
filtered.sort((a,b)=>a.price-b.price);
}

if(sort==="high"){
filtered.sort((a,b)=>b.price-a.price);
}

if(sort==="rating"){
filtered.sort((a,b)=>b.rating-a.rating);
}

let container=document.getElementById("productList");

container.innerHTML="";

filtered.forEach(p=>{

let div=document.createElement("div");

div.className="product";

div.innerHTML=`
<img src="${p.image}">
<h3>${p.name}</h3>
<p>Price: ₹${p.price}</p>
<p>Rating: ${p.rating}</p>
`;

container.appendChild(div);

});

}

displayProducts();