let addBtn = document.querySelector('#addBtn');
let input = document.querySelector('#taskInput');
let list = document.querySelector('#list');


if (localStorage.getItem('htmls')) {
    list.innerHTML = localStorage.getItem('htmlLs')
}

addBtn.addEventListener('click', () => {
    let element = document.createElement('li');
    element.classList.add('item');
    element.textContent = taskInput.value;
    list.append(element);
    input.value = " ";

    let item = document.createComment('div');
    item.className = 'item_btns';
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