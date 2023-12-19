const todoList = require('../todo');
let myTodos;
myTodos = todoList();

describe("Todolist Test Suite", () => {
  test("Should add new todo", () => {
    const todoCount = myTodos.all.length;
    myTodos.add(
      {
        title: "Test todo",
        completed: false,
        dueDate: 2023-12-18
      }
    );
    expect(myTodos.all.length).toBe(todoCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(myTodos.all[0].completed).toBe(false);
    myTodos.markAsComplete(0);
    expect(myTodos.all[0].completed).toBe(true);
  });
  test('Should retrieve overdue items', () => {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0]
  const yesterday = formatDate(new Date(today.setDate(today.getDate() - 1)));
  const od = {title: 'Do Coding', dueDate: yesterday,completed:false};
  const overdueTodoCount=myTodos.overdue().length;
  myTodos.add(od);
  const overdueItems=myTodos.overdue();
  expect(overdueItems.length).toBe(overdueTodoCount+1);
 });

 test('Should retrieve due today items', () => {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0];
  const todayDate = formatDate(today);
  const todayAdd={title: 'Do laundry',dueDate: todayDate,completed:false};
  const dueTodayItemCount=myTodos.dueToday().length;
  myTodos.add(todayAdd);
  const todayItems = myTodos.dueToday();
  expect(todayItems.length).toBe(dueTodayItemCount+1);
 });

 test('Should retrieve due later items', () => {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0];
  const tomorrow = formatDate(new Date(today.setDate(today.getDate() + 1)));
  const dl={title:'Return a book',dueDate:tomorrow,completed:false};
  const dueLaterTodoItemCount =myTodos.dueLater().length
  myTodos.add(dl);
  expect(myTodos.dueLater().length).toBe(dueLaterTodoItemCount+1);
 });
});