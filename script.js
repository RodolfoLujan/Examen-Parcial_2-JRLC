let highPriorityCardToDelete = null;

function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("priority");


    if (taskInput.value.trim() && prioritySelect.value) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.priority = prioritySelect.value; 

        const text = document.createElement("p");
        text.textContent = `${taskInput.value}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            if (card.dataset.priority === 'alta') {
                highPriorityCardToDelete = card;
                document.getElementById("deleteConfirmation").style.display = "flex";
            } else {
                container.removeChild(card);
            }
        }

        switch (prioritySelect.value) {
            case 'alta':
                card.style.borderColor = 'red';
                card.style.backgroundColor = 'red';
                card.style.color = 'black';
                break;
            case 'media':
                card.style.borderColor = 'yellow';
                card.style.backgroundColor = 'yellow';
                card.style.color = 'black';
                break;
            case 'baja':
                card.style.borderColor = 'green';
                card.style.backgroundColor = 'green';
                card.style.color = 'white';
                break;
        }

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
        prioritySelect.value = "alta"; 
    }
}

function confirmDelete(confirm) {
    const container = document.querySelector(".main-container");
    if (confirm && highPriorityCardToDelete) {
        container.removeChild(highPriorityCardToDelete);
    }
    document.getElementById("deleteConfirmation").style.display = "none";
    highPriorityCardToDelete = null;
}
