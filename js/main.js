let task_input = document.getElementById("taskInput"),
    form = document.forms[0],
    output = document.getElementById("output"),
    tasks_counter = document.querySelector("#tasksCounter"),
    finished_counter = document.getElementById("finishedCounter"),
    empty = document.getElementById("empty"),
    tasks = [],
    id = 0;

window.onload = function () {
    getTasks();
    deleteTask();
    counter();
    finishTask();
    countFinished();
    checkEmpty();
}


form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    if (task_input.value === "") {
        alert("You can not add an empty task")
    } else if (tasks.includes(task_input.value)) {
        alert("you can not add >>" + task_input.value + " << again")
    } else {
        tasks.push({
            content: task_input.value,
            status: false
        })
        afterAdd();
        addTasks();
        counter();
        finishTask();
        deleteTask();
        saveTasks();
        checkEmpty();
    }
})

function afterAdd() {
    task_input.value = ""
    task_input.focus()
}

function addTasks() {

    let task_li = `<li class="task list-group-item d-flex justify-content-between align-items-center text-bg-secondary" id=${id++}>
                        <span class="fw-bold">${tasks[tasks.length - 1].content}</span> 
                        <i class="fa-solid fa-trash text-danger"></i>
                    </li>`

    output.innerHTML += task_li
}

function counter() {
    
    tasks_counter.innerHTML = output.children.length
}

function finishTask() {
    let tasksLi = document.getElementsByClassName("task")

    for (let index = 0; index < tasksLi.length; index++) {
        const taskLi = tasksLi[index];

        taskLi.addEventListener("click", function () {
            taskLi.classList.toggle("bg-success")
            taskLi.classList.toggle("finished")
            tasks[taskLi.getAttribute('id')].status = !tasks[taskLi.getAttribute('id')].status;
            saveTasks()
            countFinished()
        })
    }
}

function countFinished() {
    let finished = document.querySelectorAll(".finished");
    finished_counter.textContent = finished.length
}

function deleteTask() {
    let delete_icons = document.querySelectorAll(".fa-trash");

    for (let index = 0; index < delete_icons.length; index++) {
        const delete_icon = delete_icons[index];

        delete_icon.addEventListener("click", function (ev) {
            ev.stopPropagation()
            this.parentElement.remove()
            tasks.splice(tasks.indexOf(delete_icon.previousElementSibling.textContent), 1)
            counter();
            countFinished();
            saveTasks();
            checkEmpty();
        })
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasks() {
    if (localStorage.getItem("tasks")) {
        tasks = JSON.parse(localStorage.getItem("tasks"));

        for (let index = 0; index < tasks.length; index++) {
            const task = tasks[index];
            output.innerHTML += `<li class="task list-group-item d-flex justify-content-between align-items-center text-bg-secondary 
                                    ${task.status && 'finished bg-success'}" id=${id++}>
                                    <span class="fw-bold">${task.content}</span> 
                                    <i class="fa-solid fa-trash text-danger"></i>
                                </li>`
        }
    }
}

function checkEmpty() {
    if (tasks.length === 0) {
        empty.classList.add('d-block')
        empty.classList.remove('d-none')
    } else {
        empty.classList.remove('d-block')
        empty.classList.add('d-none')
    }
}
var todayContainer = document.querySelector(".today");


var d = new Date();


var weekday = new Array(7);
weekday[0] = `<h1> "Its Sunday 🖖"       </h1>`
weekday[1] = `<h1> "Its Monday 💪"😀        </h1>`
weekday[2] = `<h1> "Its Tuesday "😜       </h1>`
weekday[3] = `<h1> "Its Wednesday" 😌☕️       </h1>`
weekday[4] = `<h1> "Its Thursday "🤗        </h1>`
weekday[5] = `<h1> "Its Friday 🍻"     </h1>`
weekday[6] = `<h1> "Its Saturday "😴        </h1>`


var n = weekday[d.getDay()];


var randomWordArray = Array(
    " <h1>  Oh my, </h1> ",
    "<h1>   Whoop,  </h1>",
    " <h1>Have A Happy Day </h1>  ",
    "<h1>    Seems  </h1>",
    " <h1>  Awesome,    </h1> ",
    " <h1>  Enjoy your Day </h1>  ",
    " <h1>  Hava A Nice Day   </h1> ",
    " <h1>  A good day is a good day. A bad day is a good story </h1> ",
    "<h1>  Who doesn't want to have a great day, right? </h1>",
    " <h1> Today, give a stranger one of your smiles  </h1>  ",
    "<h1>  Today's a great day to change a life  </h1>",
    " <h1>  Don’t count the days, make the days count </h1> ",
    " <h1>  When you're wide awake, say it for goodness sake, it's gonna be a great day</h1>  ",
    " <h1> Don’t expect a great day; create one.  </h1> ",
    " <h1> It's not about how much we earn or what we own; it's about who we are and where",
    " <h1> You can do anything you set your mind to! Just believe in yourself and never give up.</h1>",
    " <h1> The best way to predict your future is to create it.</h1>",
    " <h1> If you don’t like something, change it. If you can’t change it, change your attitude.</h1>",

    " <h1> Good morning! Wishing you a day as bright and beautiful as you are.</h1>",
    " <h1> Good afternoon! I hope this day brings you joy and success.</h1>",
    " <h1> Good evening! May all your dreams come true tonight.</h1>",
    " <h1> Good night! Sleep tight and may tomorrow bring you wonders.</h1>",
    " <h1> Every new day is a new opportunity to make your dreams come true.</h1>",

);

var randomWord =
    randomWordArray[Math.floor(Math.random() * randomWordArray.length)];


todayContainer.innerHTML = randomWord + n;
