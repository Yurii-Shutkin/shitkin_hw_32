'use strict';

 (() => {

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
    const ul = generateList(array); 
    document.body.append(ul);
    console.log(ul)
    
 })();