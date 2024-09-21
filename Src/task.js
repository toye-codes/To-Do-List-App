const addTaskButton = document.getElementById("addTask");
const taskContainer = document.querySelector(".task");

addTaskButton.addEventListener("click", function () {
    const taskText = prompt("Enter a new Task");

    if (taskText) {
        
        const newTaskItem = document.createElement("div");
        newTaskItem.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("aria-label", "task");

        const taskParagraph = document.createElement("p");
        taskParagraph.textContent = taskText;

        const cancelDiv = document.createElement("div");
        cancelDiv.classList.add("cancel");
        cancelDiv.innerHTML = "&#10006;";

        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(taskParagraph);
        newTaskItem.appendChild(cancelDiv);

        taskContainer.appendChild(newTaskItem);

        updateTaskCount();
    }
});

taskContainer.addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        const taskText = event.target.nextElementSibling;
        taskText.style.textDecoration = event.target.checked ? "line-through" : "none";
    }
});

taskContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("cancel")) {
        event.target.parentElement.remove();
        updateTaskCount();
    }
});

function updateTaskCount() {
    const taskCount = document.querySelectorAll(".task-item");
    const taskText = taskCount.length === 1 ? "1 Task" : `${taskCount.length} Tasks`;
    document.getElementById("tasks").querySelector("p").textContent = taskText;
}

if (taskContainer) {
    updateTaskCount();
}
