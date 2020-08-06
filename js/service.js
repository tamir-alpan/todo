function create(newToDo) {
    todos.push(newToDo)
}

function erase(todoIndex) {
    todos.splice(todoIndex, 1)
}

function update(updatedToDo) {

}
function getTodoIndexById(idToDelete) {

    return todos.findIndex(function (item, i) {
        return item.id === idToDelete;
    });
}