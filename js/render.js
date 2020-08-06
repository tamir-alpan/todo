


function renderTodoList(list) {

    var ul = document.querySelector(".todo-list")
    ul.innerHTML = ""
    list.forEach(function (value) {
        var li = document.createElement("li")
        var imgContainer = document.createElement("div")
        var img = document.createElement("img")
        var description = value.description
        li.innerHTML = description
        img.src = "./assets/img/image.png"
        img.onclick = function () {
            var todoIndex = getTodoIndexById(value.id)
            erase(todoIndex)
            renderTodoList(todos)
        }
        imgContainer.appendChild(img)
        li.appendChild(imgContainer)

        // li.onclick = function () {
        //     alert(value.description)

        // }

        ul.appendChild(li)


    })
}


function presentTime(){
var clock = document.getElementById("timeAndDate")
var date = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
clock.innerHTML = hours + ":" + minutes  + ":" +seconds ;

}


function colorClick(){
    let array = ["pink","yellow","blue","purple","white","orange","violet","beise","grey"]
    var choice = Math.floor(Math.random()*8)
    var newColor= array[choice]
    var watch = document.getElementById("timeAndDate")
    watch.setAttribute("style","background-color:" + newColor)

}
setInterval(colorClick,1000)
setInterval(presentTime,1000)

function onCreateTodo(e) {
    e.preventDefault();

    // TODO: add a checkbox input element for completed
    let description = document.querySelector(".description").value;
    
    // TODO: add the checkbox value to the create function 
    create({
        description: description
    });

    renderTodoList(todos);
    swal.close();
}

function onOpenAddList(){
    swal.fire({
        html: `
            <form onsubmit="onCreateTodo(event)">
                <input autofocus class='description' placeholder='description' />
                <input type='submit' />
            </form>
        `,
        showConfirmButton: false
    })
}