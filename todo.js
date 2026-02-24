const taskInput = document.getElementById('task-input');
const taskDes = document.getElementById('task-des');
const addtask = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const cancelBtn = document.getElementById('cancel');
const confirmBtn = document.getElementById('confirm');
const modal = document.getElementById('modal');
const sortBtn = document.getElementById('sort-btn');
let taskEdit = null;

addtask.addEventListener('click', () => {
    taskEdit = null;
    taskInput.value = '';
    taskDes.value = '';
    modal.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

confirmBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const taskDesText = taskDes.value.trim();
    if (taskText !== '') {
        if (taskEdit) {
            taskEdit.querySelector('.task-item span').textContent = taskText;
            taskEdit.querySelector('.task-description').textContent = taskDesText;
            modal.style.display = 'none';
            taskEdit = null;
        } else {
            const li = document.createElement('li');
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            li.innerHTML = `
                <div class='task'>
                    <div class="task-item">
                        <span>${taskText}</span>
                        <div class="task-btn flex "> 
                           <button class="edit-btn flex">
                                <img id='repair-icon' src="repair.svg" />
                                Edit
                            </button>
                           <button popovertarget="delete" class="delete-btn flex">
                                <img id='trash-icon' src="trash.svg" />
                                Delete
                            </button>
                            
                        </div>
                    </div>
                    <span class="task-description">${taskDesText}</span>
                    <p>${timeString}</p>
                </div> `;
            taskList.appendChild(li);
            taskInput.value = '';
            taskDes.value = '';
            modal.style.display = 'none';
        }

    }
});
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');
        taskList.removeChild(li);
    }
    if (e.target.classList.contains('edit-btn')) {
        li = e.target.closest('li');
        const taskText = li.querySelector('.task-item span').textContent;
        const taskDesText = li.querySelector('.task-description').textContent;
        taskInput.value = taskText;
        taskDes.value = taskDesText;
        modal.style.display = 'block';
        taskEdit = li;
    }
});
function sortTasks() {
    const items = Array.from(taskList.querySelectorAll('li'));

    items.sort((a, b) => {
        const textA = a.querySelector('.task-item span').textContent.toLowerCase();
        const textB = b.querySelector('.task-item span').textContent.toLowerCase();
        return textA.localeCompare(textB);
    });

    taskList.innerHTML = '';
    items.forEach(item => taskList.appendChild(item));
}
sortBtn.addEventListener('click', sortTasks);