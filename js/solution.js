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
    
    const generateList = function(arr) {
        const ul = document.createElement('ul');
        arr.forEach(item => { 
            if(Array.isArray(item)) {
                ul.innerHTML += `<li>${generateList(item).outerHTML}</li>`;
            } else {
                ul.innerHTML += `<li>${item}</li>`;
            }
        }) 
        return ul;
    }

    const array = [1,2, [1.1,1.2,1.3] ,3];
    const list = generateList(array); 
    ul.after(list);

})();
