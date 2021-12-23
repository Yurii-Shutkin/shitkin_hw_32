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

    const table = newTable(10, 10);
    
    function newTable(cols, rows) {
        const table = document.createElement('table');
        table.setAttribute('border', '1');
        for(let i = 0; i < cols; i++) {
            const tr = document.createElement('tr');
            table.append(tr);
            for(let j = 1; j <= rows; j++) {
                const td = document.createElement('td');
                tr.append(td);
                td.innerHTML = i * cols + j;
            }
        }
        return table;
    }

    list.after(table);
    console.log(newTable(10, 10));

})();
