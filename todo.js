const taskInput = document.getElementById("task-input");
const taskDes = document.getElementById("task-des");
const addtask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const cancelBtn = document.getElementById("cancel");
const confirmBtn = document.getElementById("confirm");
const modal = document.getElementById("modal");
const sortBtn = document.getElementById("sort-btn");
let taskEdit = null;
let pendingDelete = null;

addtask.addEventListener("click", () => {
    taskEdit = null;
    taskInput.value = "";
    taskDes.value = "";
    modal.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.getElementById("cancels").showPopover();
});
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

confirmBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const taskDesText = taskDes.value.trim();
    if (taskText !== "") {
        if (taskEdit) {
            taskEdit.querySelector(".task-item span").textContent = taskText;
            taskEdit.querySelector(".task-description").textContent = taskDesText;
            modal.style.display = "none";
            document.getElementById("success").showPopover();
            taskEdit = null;
        } else {
            const li = document.createElement("li");
            const now = new Date();
            const date = now.toLocaleDateString('vi-VN');
            const time = now.toLocaleTimeString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit'
            });

            const dateTimeString = `${date} - ${time}`;
            li.innerHTML = `
                <div class='task'>
                    <div class="task-item">
                        <span>${taskText}</span>
                        <div class="task-btn flex "> 
                           <button class="edit-btn flex">
                                <img id="repair-icon" src="repair.svg" />
                                <span class="desktop">Edit</span>
                            </button>
                            <button class="delete-btn flex">
                                <img id="trash-icon" src="trash.svg" />
                                <span class="desktop">Delete</span>
                            </button>                            
                        </div>
                    </div>
                    <span class="task-description">${taskDesText}</span>
                    <p>${dateTimeString}</p>
                </div> `;
            taskList.appendChild(li);
            taskInput.value = "";
            taskDes.value = "";
            modal.style.display = "none";
        }
    }
});
taskList.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");
    const editBtn = e.target.closest(".edit-btn");
    if (deleteBtn) {
        pendingDelete = deleteBtn.closest("li");
        document.getElementById("delete-confirm").showPopover();
    }
    if (editBtn) {
        let li = e.target.closest("li");
        const taskText = li.querySelector(".task-item span").textContent;
        const taskDesText = li.querySelector(".task-description").textContent;
        taskInput.value = taskText;
        taskDes.value = taskDesText;
        modal.style.display = "block";
        taskEdit = li;
    }
});
document.getElementById("delete-ok").addEventListener("click", () => {
    if (pendingDelete) {
        pendingDelete.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        pendingDelete.style.opacity = "0";
        pendingDelete.style.transform = "translateX(30px)";

        setTimeout(() => {
            taskList.removeChild(pendingDelete);
            pendingDelete = null;
        }, 300);

        document.getElementById("delete-confirm").hidePopover();

        setTimeout(() => {
            document.getElementById("delete-success").showPopover();
        }, 350);
    }
});
function sortTasks() {
    const items = Array.from(taskList.querySelectorAll("li"));

    items.sort((a, b) => {
        const textA = a.querySelector(".task-item span").textContent.toLowerCase();
        const textB = b.querySelector(".task-item span").textContent.toLowerCase();
        return textA.localeCompare(textB);
    });

    taskList.innerHTML = "";
    items.forEach((item) => taskList.appendChild(item));
}
sortBtn.addEventListener('click', sortTasks);