'use strict';

(() => {

    const createTable = function() {
        const table = document.createElement('table');
        const td = document.createElement('td');
        
        for(let i = 1; i <= 10; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
        }
        console.log(table)
    }

    createTable();
})()