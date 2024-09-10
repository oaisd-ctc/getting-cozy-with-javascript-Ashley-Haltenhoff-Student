const text = document.getElementById('text');
const addBtn = document.getElementById('btn-add-item');
const list = document.getElementById('list');

const mainDiv = document.getElementById('main-div');
const btnDiv = document.getElementById('btn-div');

addBtn.addEventListener('click', () => {
    if (text.value == "") { }
    else {
        const listObj = document.createElement("li");
        listObj.innerHTML = text.value;
        listObj.classList.add("list-object");
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("delete-btn");
        
        list.appendChild(listObj);
        btnDiv.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            listObj.remove();
            deleteBtn.remove();
        });
    }
})
