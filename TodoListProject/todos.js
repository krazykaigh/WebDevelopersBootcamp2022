let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list' || input === 'l') {
        console.log('*****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
    } else if (input === 'new' || input === 'n') {
        const newTodo = prompt('Ok, what is the new todo?');
        if (newTodo != "" && newTodo != undefined) {
            todos.push(newTodo);
            console.log(`${newTodo} added to the list!`);
        }
        else {
            console.log('Entry was empty or undefined. Item not added.');
        }
    } else if (input === 'delete' or input === 'd') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            if (index >= 0 && index < todos.length) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
            } else {
                console.log('Unknown index');
            }
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')