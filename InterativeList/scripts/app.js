const text = document.getElementById('text');
const addBtn = document.getElementById('btn-add-item');
const list = document.getElementById('list');

const mainDiv = document.getElementById('main-div');

addBtn.addEventListener('click', AddToList)
text.addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {
        AddToList();
        text.value = "";
    }
});

function AddToList() {
    if (text.value == "") { }
    else {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item")
        list.appendChild(itemContainer);

        const listObj = document.createElement("li");
        listObj.innerHTML = text.value;
        listObj.classList.add("list-object");
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        
        itemContainer.appendChild(deleteBtn);
        itemContainer.appendChild(listObj);

        deleteBtn.addEventListener('click', () => {
            itemContainer.remove();
        });
    }
}
