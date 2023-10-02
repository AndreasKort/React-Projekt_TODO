import React from 'react';

const todoList = [
  { id: 1, task: 'Einkaufen gehen', completed: false },
  { id: 2, task: 'React-App erstellen', completed: true },
  { id: 3, task: 'Übungen für JavaScript machen', completed: false },
  // Weitere Aufgaben können hinzugefügt werden
];

function ToDoList() {
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.task} - {item.completed ? 'Abgeschlossen' : 'Nicht abgeschlossen'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
