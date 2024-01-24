
const presentTodos = document.getElementById("present_todos")
const presentBtn = document.getElementById("present_btn")
const presentContainer = document.getElementById("present_container")

const completedTodos = document.getElementById("completed_todos")
const completedBtn = document.getElementById("completed_btn")
const completedContainer = document.getElementById("completed_container")


const userInput = document.getElementById("user_input")
const addBtn = document.getElementById("add_todo")




presentTodos.style.height = "500px"

completedTodos.style.height = "0px"


let todos = []

const saveTodos = (todos) => {
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
}

const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos"))
}


const setTodos = () => {

    todos = getTodos() === null ? [] : getTodos()

    todos.map((todo) => {
        if (todo.checked === false) {
            presentContainer.innerHTML += `
    <div class="todo" id=${todo.id}>
    <div class="hint">
        press to checkmark
    </div>
    <div class="todo_title">
        ${todo.title}
    </div>
    <div class="date_created">
        ${todo.date}
    </div>
</div>`
        }
        else {
            completedContainer.innerHTML +=
                `
    <div class="todo" id=${todo.id}>
    <div class="hint">
    Completed
    </div>
    <div class="todo_title">
        ${todo.title}
    </div>
    <div class="date_created">
    created on: ${todo.date} <br> completed on: ${todo.checkedOn}
    </div>
</div>`
        }
    })
}





setTodos()

const toggleTodos = (todo, todoBtn, todo_name) => {
    const isOpen = todo.style.height === "500px";

    console.log(isOpen)

    if (isOpen === true) {
        todo.style.animation = "pull_animation 0.5s linear";
        todo.style.height = "0px";
        todoBtn.innerText = `Show ${todo_name} Todos`

    } else {
        todo.style.animation = "drop_animation 0.5s linear";
        todo.style.height = "500px";
        todoBtn.innerText = `Show Less`
    }
}


addBtn.addEventListener("click", () => {

    if (userInput.value === "") {
        alert("add title to your todo")
    }
    else {
        const timestamp = Date.now();
        const dateObject = new Date(timestamp);

        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(dateObject);



        presentContainer.innerHTML += `
    <div class="todo" id=${todos.length + 1}>
    <div class="hint">
        press to checkmark
    </div>
    <div class="todo_title">
        ${userInput.value}
    </div>
    <div class="date_created">
        ${formattedDate}
    </div>
</div>`


        todos.push({
            id: todos.length + 1,
            title: userInput.value,
            checked: false,
            date: formattedDate
        })


        saveTodos(todos)


        userInput.value = ""

    }
})


presentContainer.addEventListener("click", (event) => {
    const timestamp = Date.now();
    const dateObject = new Date(timestamp);

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(dateObject);


    const element = event.target.closest(".todo")

    event.stopPropagation()
    presentContainer.removeChild(element)

    element.querySelector(".hint").innerText = "Completed"
    const oldDate = element.querySelector(".date_created").textContent
    const newDate = `created on: ${oldDate} <br> completed on: ${formattedDate}`
    element.querySelector(".date_created").innerHTML = newDate
    completedContainer.appendChild(element)


    console.log(element.id)

    todos.forEach((todo) => {

        if (todo.id == element.id) {
            todo.checked = true
            todo.checkedOn = formattedDate
        }
    })

    saveTodos(todos)



})

completedContainer.addEventListener("click", (event) => {
    const element = event.target.closest(".todo")
    let user_confirm = confirm("you want to delete the todo?")
    if (user_confirm) {
        event.stopPropagation()
        completedContainer.removeChild(element)
    }

    todos = todos.filter(todo => todo.id != element.id)


    saveTodos(todos)
})


presentBtn.addEventListener("click", () => {
    toggleTodos(presentTodos, presentBtn, "Present")
})

completedBtn.addEventListener("click", () => {
    toggleTodos(completedTodos, completedBtn, "Completed")
})

