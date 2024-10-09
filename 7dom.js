// JS DOM(Document Object model)
// created by the browser as the html load into the browser.
// browser create objet of html called 'document object'
//in document object there is model of complete html in tree like structure 
console.log(document);
console.log(document.URL);
//get content 
//get html element/s using querySelector/All
//querySelector return "first element" that match CSS selector
//to get all matched elements we use querySelectorAll
let resultQS = document.querySelector('p');
console.log("query selector result: ",resultQS);
let allResults = document.querySelectorAll('p'); // return node list of all matched elements
console.log("all results: ",allResults);

let classResult = document.querySelectorAll('.jst')
console.log("select by class name: ",classResult);

let idResults = document.querySelector('#paragraph');
console.log('selected by id: ', idResults);

// selection is the first step and modification is the next step
// there are several method available, not only querySelector/All like getElementById, getElementByClassName and getElementByTagName etc.
// but we should go with querySelector, not need to use different selector methods for different types

//changing content

let wrapper = document.querySelector('.wrapper');
console.log("wrapper class : ",wrapper);
console.log("inner html (wrapper): ", wrapper.innerHTML);

// wrapper.innerText = "hi" // overwrite original
// wrapper.innerHTML = "<p>hi</p>"; // overwrite original

let attr = document.querySelector('a');
let attrHref = attr.getAttribute('href');
console.log(attrHref);
let setHref = attr.setAttribute('href', "youtube.com/manish");
let attrHref2 = attr.getAttribute('href');
console.log(attrHref2);

// change styling 

let paragraphStyle = document.querySelector('#paragraph');
paragraphStyle.style.color = "red";

// add new class 
let para  = document.querySelector('#paragraph');
para.classList.add("para", "para2");
// remove class 
para.classList.remove("para2");
//replace class
para.classList.replace("para", "para2");

// parent, sibling, children elements
// access child elements by using parent
let parent = document.querySelector(".wrapper");
console.log("parent children elements: ", parent.children);//return html collection 
// we can't use foreach on html collection
// from method create new shallow-copied array from array-array/iterable object(NodeList, arguments, Set, Map)
Array.from(parent.children).forEach(function(element) {
    element.classList.add('newClass')   
})
console.log("added class in all children", parent);

//access parent element's by using children
let child = document.querySelector(".para2");
let parent2 = child.parentElement;
console.log("parent: ", parent2);

//access sibling element's
let nextSibling = child.nextElementSibling;
console.log("next sibling: ", nextSibling);
let prevSibling = child.previousElementSibling;
console.log("previous sibling: ", prevSibling);

//note : in js we can pass any functionality(functions) as an argument

//event handlers   (as handlers are also functions that are invoked in response to events)

let eventHandler = document.querySelector('.btn');
eventHandler.addEventListener('click', ()=>{
    console.log("some clicked me!");
})

// in js not everything is clickable by default but we can make them clickable by using event handlers
let listItems = document.querySelectorAll('li');
listItems.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        console.log("item clicked", event);
        // event.target.style.textDecoration = 'line-through';
        event.target.remove();
    })
})
const ul = document.querySelector('ul');
let createBtn = document.querySelector('.btn2');
createBtn.addEventListener('click', () => {
    console.log("list created");
    let li = document.createElement('li');
    li.textContent = "new li";
    ul.append(li);
    // ul.prepend(li);
})

// event bubling and deligation
/*
event bubbling : when we apply event listners to elements 
then child event runs then parent then grandparent ... then root element
not matter where you have created event listners
event delegation: taking advantage of bubbling applying event listners to parent instead of every child element
*/
let liElement = document.querySelector('li');
let eventLi = liElement.addEventListener("click", ()=>{
    console.log("li clicked");
})
let ulElement = document.querySelector('ul');
let eventUl = ulElement.addEventListener("click", ()=>{
    console.log("ul clicked");
})

let olElement = document.querySelector('ol');
let eventOl = olElement.addEventListener("click", (e)=>{
    console.log("ol clicked");
    if(e.target.nodeName="LI"){ // no need to add event listener to every li, this is called deligation.
        e.target.remove();
    }
})

// copy event 

let copyrightElement = document.querySelector('.para2')
copyrightElement.addEventListener("click", (e)=>{
    console.log("you dare to copy this ");
    // also insert links and do other things while someone copy your content
})

// mouse move event : if we go inside anyone boundry and then move (moving outside the boundry no considered as mouse move event)
// generally we use the this for a box

copyrightElement.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY);
})
