'use strict';

(() => {

    // Task 1
    
    const ul = document.getElementById('ulId');

    const attsInfo = {
        values: [],
        names: [],
    }

    for (let atts of ul.attributes) {
        attsInfo.values.push(atts.nodeValue);
        attsInfo.names.push(atts.nodeName);
    }

    console.log(attsInfo.values, attsInfo.names);

    ul.lastElementChild.innerHTML = 'Привет, меня зовут Юра';
    ul.firstElementChild.setAttribute('data-my-name', 'Yurii');
    ul.removeAttribute('data-dog-tail');


    // Task 2

    const numArr = [1,2, [1.1,1.2,1.3] ,3];
    const list = generateList(numArr); 
    
    function generateList(array) {
        const ul = document.createElement('ul');
        array.forEach(item => { 
            if(Array.isArray(item)) {
                ul.innerHTML += `<li>${generateList(item).outerHTML}</li>`;
            } else {
                ul.innerHTML += `<li>${item}</li>`;
            }
        }) 
        return ul;
    }
    
    console.log(generateList(numArr));
    ul.after(list);


    // Task 3

    function getTable(cols, rows) {
        const table = document.createElement('table');
        table.setAttribute('border', '2px');
        let num = 0;

        for(let i = 0; i < cols; i++) {
            const tr = document.createElement('tr');
            table.append(tr);

            for(let j = 0; j < rows; j++) {
                const td = document.createElement('td');
                tr.append(td);
                td.innerHTML = ++num;
            }
        }

        return table;
    }

    const newTable = getTable(10, 10);
    list.after(newTable);
    
})();
