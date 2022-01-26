const lableContainer = document.getElementById('lable-list');
const addButton = document.getElementById('add-lable-btn');
const lable = document.getElementById('add-label');
const lables = document.getElementById('lables');

//append labels dynamically
addButton.addEventListener('click', function(e){
    e.preventDefault();
    let lableName = lable.value;
    if(lableName != ""){
        lables.value = lables.value+ "^" + lableName ;
         // we are giving string input of lebles in issue schema
        let div = document.createElement('div'); 
        // latter we will convert it into array
        div.classList.add('tag');
        div.innerText = lableName;
    
        lableContainer.appendChild(div);      
    }
    lable.value = "";
    
})