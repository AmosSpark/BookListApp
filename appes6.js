class Book {
    constructor (title,author,isbn) {
        this.title = title,
        this.author = author,
        this.isbn = isbn
    }
}

class UI {
    addBookToList (book) {
        const list = document.querySelector("#book-list"),
              row  = document.createElement("tr");
              row.innerHTML = `
                                <td>${book.title}</td>
                                <td>${book.author}</td>
                                <td>${book.isbn}</td>
                                <td><a href="#" class="delete">X</a></td>
                             `;
              list.appendChild(row);
              
    }

    showAlert (message,className) {
        // Create element
        const div = document.createElement("div");
        // add clas name
        div.className = `alert ${className}`;
        // add Text
        const divText = document.createTextNode(`${message}`);
        div.appendChild(divText);
        // show error message
        // 1 - get container
        const container = document.querySelector(".container");
        // 2 - get form
        const form = document.querySelector("#book-form");
        // 3 - Insert message to dox
        container.insertBefore(div,form);
        // time out fn
        function timeOut () {
            div.remove();
        }
        // set time out
        setTimeout (timeOut,3000);
    }

    deletebook (target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields () {
        const clearTitle = document.querySelector("#title").value = "",
              clearAuthor = document.querySelector("#author").value = "",
               clearIsbn = document.querySelector("#isbn").value = ""; 
    }
}

// Event Listener for add book

const addBook = document.querySelector("#book-form");
      addBook.addEventListener("submit",onSubmit);
      function onSubmit (e) {
        //   Get form values
         const title = document.querySelector("#title").value,
               author = document.querySelector("#author").value,
               isbn = document.querySelector("#isbn").value; 
               
        // Instantiate a book

        const book = new Book (title, author, isbn);

        // Instantiate ui

        const ui = new UI ();

        // Validate

        if (title === "" || author === "" || isbn === "") {
            ui.showAlert("Please fill in all fields","error");
        } else {
            // Add book to list

            ui.addBookToList(book);

            // show alert

            ui.showAlert("Book Added!","success");

            // Clear fields

            ui.clearFields();
        }
         e.preventDefault();
      }

    //   Event Listener for remove book

     const removeBook = document.querySelector("#book-list");
           removeBook.addEventListener("click",onClick);
           function onClick (e) {
            // Instantate UI
            
            const ui = new UI ();

            // delete

            ui.deletebook(e.target);

            // show alert

            ui.showAlert ("Book removed!","success");
            
            e.preventDefault()
           } 