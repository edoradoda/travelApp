// Import the js file to test
import { showResult } from "../src/client/js/showResult"

let input = { agreement: "AGREEMENT"} 

test('Check showResult ', () => {
    document.body.innerHTML = `
    <div  id="results" />
  `;

  showResult(input)

  const divResults = document.getElementById('results');
//   const addTodoBtn = document.getElementById('addTodoBtn');
//   const todolist = document.getElementById('todoList');
//   newTodoInput.value = 'New todolist!';
//   addTodoBtn.click();
// console.log("eeeeee",divResults.innerHTML.length)

  expect(divResults.innerHTML.length).toBeGreaterThan(10);

});