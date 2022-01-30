let inputTask = document.getElementById('textInput')
const btnAdd = document.querySelector('#buttonAdd')
const taskList = document.querySelector('#uls')
btnAdd.addEventListener('click', (e) => {
    if(inputTask.value === '') return


    createDelete(inputTask.value)

    inputTask.value = ''

})

function createDelete (value) {
    
    const p = document.createElement('p')
    p.className = 'p'
    taskList.appendChild(p)
    p.textContent = value

    const btn = document.createElement('button')
    btn.className = 'btn'
    p.appendChild(btn)
    btn.textContent = "delete"

    btn.addEventListener('click', (e) => {
        modalwindow.style.display = "block"
        deleteTask.addEventListener('click', (e) => {
            taskList.removeChild(p)
            modalwindow.style.display = "none"
    
        })
        
        

       

    })

    p.addEventListener('click', (e) => {
        p.classList.toggle('p-ready')


    })

    const modalwindow = document.querySelector('.modawwlindow')
    const closeBtn = document.querySelector('.closemodal')
    const deleteTask = document.querySelector('.delete')

    //btn.addEventListener('click', (e) => {
        //modalwindow.style.display = "block"
    //})
    closeBtn.addEventListener('click', (e) => {
        modalwindow.style.display = "none"
    })
    

    




}

