const button = document.getElementById('ADD');
const list = document.querySelector('.list');
console.log('1');

button.addEventListener('click', function() {
    const input = document.querySelector('#txt');
    const text = input.value; 
    const begin = document.querySelector('.begin');
    if (text === "") {
        console.log('3');
        alert("The input is empty!");
    } else {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `<input type="checkbox" class="check"> <p id="test">${text}</p>`; 
        begin.style.display = 'none';
        list.prepend(task);

        const check = task.querySelector('.check');
        const paragraphe = document.getElementById('test');
        const line = document.querySelector('ligne');
        check.addEventListener('change', function(e) {
            if (check.checked) {
               paragraphe.classList.add('checked');
               list.appendChild(task);
            } else {
               paragraphe.classList.remove('checked');
                list.prepend(task);
            }
        });
        input.value = ''; 
    }
    const resetBtn= document.querySelector('#RESET');
    resetBtn.addEventListener('click', function(){
      const tasks = list.querySelectorAll('.task');
      tasks.forEach(task => {
         list.removeChild(task); 
      });
      begin.style.display = 'inline-block';

    })
});
