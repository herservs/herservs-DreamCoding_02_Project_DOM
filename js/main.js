'use strict'

const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');

Node

addBtn.addEventListener('click', () => {
    console.log('[click]');
    onAdd();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        onAdd();
    }
});

function onAdd() {

    console.log('[onAdd]');

    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    // 2. 새로운 item 생성 : 텍스트 + 삭제 아이콘    
    const item = createItem(text);
    // 3. items 안에 item_row 추가     
    items.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({
        block: 'center'
    });
    // 5. 인풋 초기화
    input.value = '';
    input.focus();
}



function createItem(text) {
    console.log('[createItem]');
    // item__row
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    // item
    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    // item__name
    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    // item__delete
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteBtn.addEventListener('click', (e) => {
        items.removeChild(itemRow);
        console.log('[createItem:click]');
    });



    // item__divider
    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    // make item
    item.appendChild(name);
    item.appendChild(deleteBtn);

    // make itemRow
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}