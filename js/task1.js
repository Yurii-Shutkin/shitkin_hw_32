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

})();
