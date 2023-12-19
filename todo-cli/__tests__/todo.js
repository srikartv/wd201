const todoBucket = require('../todo');
let allTodos;
allTodos=todoBucket();

describe("TodoBucket Test Suite", () => {
  test("Should add new todo", () => {
    const todoCount = allTodos.all.length;
    allTodos.add(
      {
        title: "Test todo",
        completed: false,
        dueDate: 2023-12-18
      }
    );
    expect(allTodos.all.length).toBe(todoCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(allTodos.all[0].completed).toBe(false);
    allTodos.markAsComplete(0);
    expect(allTodos.all[0].completed).toBe(true);
  });
  test('Should retrieve overdue items', () => {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0]
  const yesterday = formatDate(new Date(today.setDate(today.getDate() - 1)));
  const od = {title: 'Do Coding', dueDate: yesterday,completed:false};
  const overdueTodoCount=allTodos.overdue().length;
  allTodos.add(od);
  const overdueItems=allTodos.overdue();
  expect(overdueItems.length).toBe(overdueTodoCount+1);
 });

 test('Should retrieve due today items', () => {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0];
  const todayDate = formatDate(today);
  const todayAdd={title: 'Do laundry',dueDate: todayDate,completed:false};
  const dueTodayItemCount=allTodos.dueToday().length;
  allTodos.add(todayAdd);
  const todayItems = allTodos.dueToday();
  expect(todayItems.length).toBe(dueTodayItemCount+1);
 });

 test('Should retrieve due later items', () => {
  const today = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0];
  const tomorrow = formatDate(new Date(today.setDate(today.getDate() + 1)));
  const dl={title:'Return a book',dueDate:tomorrow,completed:false};
  const dueLaterTodoItemCount =allTodos.dueLater().length
  allTodos.add(dl);
  expect(allTodos.dueLater().length).toBe(dueLaterTodoItemCount+1);
 });
});