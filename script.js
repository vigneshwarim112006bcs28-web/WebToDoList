
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed", checkbox.checked);
        updateCount();
    });

    deleteButton.addEventListener("click", function() {
        li.remove();
        updateCount();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();

    updateCount();
}

function updateCount() {
    let tasks = taskList.querySelectorAll("li");
    let remaining = 0;

    tasks.forEach(function(task) {
        let checkbox = task.querySelector("input");

        if (!checkbox.checked) {
            remaining++;
        }
    });

    taskCount.textContent =
        remaining + (remaining === 1
        ? " task remaining"
        : " tasks remaining");
}

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
