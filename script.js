let addBtn = document.querySelector('#addBtn');
let input = document.querySelector('#taskInput');
let list = document.querySelector('#list');


if (localStorage.getItem('htmls')) {
    list.innerHTML = localStorage.getItem('htmlLs')
}

function addTask(newItem) {
    newItem.classList.add('item');
    newItem.textContent = taskInput.value;
    const itemBtns = document.createElement('div');
    newItem.append(itemBtns);
    itemBtns.className = 'item__btns';
}



addBtn.addEventListener('click', () => {
    let element = document.createElement('li');
    element.classList.add('item');
    element.textContent = taskInput.value;
    list.append(element);
    input.value = " ";

    let item = document.createElement('div');
    item.className = 'item__btns';
    element.append(item);


    let checkBox = document.createElement('i');
    checkBox.className = "fa-solid fa-check";
    item.append(checkBox);

    checkBox.addEventListener('click', function () {
        element.classList.toggle('done');

    })

    let delBtn = document.createElement('i');
    delBtn.className = "fa-solid fa-trash";
    item.append(delBtn);

    delBtn.addEventListener('click', function () {
        list.removeChild(element);
    })
    taskInput.value = " "
    localStorage.setItem('htmlLs', list.innerHTML)
})