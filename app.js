//variables
const addBookBtn = document.querySelector('header button');
const form = document.querySelector('.form form');
const input = document.querySelector('.form form input');
const add = document.querySelector('.form form button');
const xMark = document.querySelector('.form form p');
const cards = document.querySelector('.cards');
const card = document.querySelector('.card cards-bg');
const overlay = document.querySelector('.overlay');
const div = document.querySelector('div.card, div.cards-bg');
const del = document.querySelector('.delete');



let myLibrary = [];


window.addEventListener('DOMContentLoaded', (e) => {
    
        const book = new Book ('To Kill a Mockingbird', 'Harper Lee', 281 );
        myLibrary.push(book);
        
        //create a div with card and cards-bg classes
        const div = document.createElement('div');
        div.classList.add('card', 'cards-bg');

        
        div.setAttribute('data-book-number', myLibrary.indexOf(book));

        //create a ul with a class of list using backticks with all the li's and vars
        const list = document.createElement('ul');
        list.classList.add('list')
        list.innerHTML = `
        <li>Name: <br> <p class="name"> ${book.name}</p></li>
        <li>Author: <br>  <p class="author">${book.author}</p></li>
        <li>Number Of Pages: <br> <p class="pages">${book.pages}</p></li>
        <div class="buttons">
            <button class="read">Read</button>
            <button class="delete" data-book-number=${myLibrary.indexOf(book)}>Delete</button>
        </div>
        `
    
        //append the ul to the div 
        div.appendChild(list);
        document.querySelector('.cards').appendChild(div);
        
   

    

});



//book constructor
function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}


//the prototype
Book.prototype.status = () =>{
    this.status = status;
};


// if Add Book clicked => Open a form to enter input
addBookBtn.addEventListener('click', ()=>{
    overlay.style.display = 'block';
    openForm();
    
});


//Press exit mark to exit the form
xMark.addEventListener('click', ()=>{
    closeForm();
    
});


//Form opener function
const openForm = ()=>{
    return form.style.display = "flex";
}


//Form exit Function
const closeForm = ()=>{
    overlay.style.display = 'none';
    return form.style.display = "none";
    
}


//clear input fileds
const clear = () =>{
    const title = document.querySelector('input#name').value = '';
    const author = document.querySelector('input#author').value = '';
    const pages = document.querySelector('input#pages').value = '';
}


form.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    const title = document.querySelector('input#name').value;
    const author = document.querySelector('input#author').value;
    const pages = document.querySelector('input#pages').value;
    const book = new Book(title, author, pages);

    console.log(book);
    
    clear();
    closeForm();
    myLibrary.push(book);
    //create a div with card and cards-bg classes
    const div = document.createElement('div');
    div.classList.add('card', 'cards-bg');

    //div.setAttribute('data-book-number', myLibrary.indexOf(book));

    for(let i=0; i<myLibrary.length; i++){
        div.setAttribute('data-book-number', i);
        
    }
    //create a ul with a class of list using backticks with all the li's and vars
    const list = document.createElement('ul');
    list.classList.add('list')
    list.innerHTML = `
        <li>Name: <br> <p class="name"> ${title}</p></li>
        <li>Author: <br>  <p class="author">${author}</p></li>
        <li>Number Of Pages: <br> <p class="pages">${pages}</p></li>
        <div class="buttons">
            <button class="read">Read</button>
            <button class="delete" data-book-number=${myLibrary.indexOf(book)}>Delete</button>
        </div>
    `
    
    //append the ul to the div 
    div.appendChild(list);
    document.querySelector('.cards').appendChild(div);
    
});


//Toggle between the book read or not read
document.querySelector('.cards').addEventListener('click', (e)=>{
    if(e.target.classList == "read"){
        e.target.classList.add('notRead');
        e.target.innerText = 'Not Read';
    }else if (e.target.classList.contains('notRead')){
        e.target.classList.remove('notRead');
        e.target.innerText = 'Read';
    }
});

//Delete the book    
document.querySelector('.cards').addEventListener('click', (e)=>{
            
            
            if(e.target.classList == 'delete'){
                    e.target.parentElement.parentElement.parentElement.remove();
                    delete myLibrary[e.target.parentElement.parentElement.parentElement.attributes[1].value];
                    console.log(myLibrary);

                }

                
        });


        
        














