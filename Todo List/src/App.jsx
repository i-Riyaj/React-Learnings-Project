import { useEffect, useState } from "react";
import { TodoProvider } from "./ContextAPI";

import { TodoForm, TodoItem } from "./Component";

export default function App() {
	const [todos, setTodos] = useState([]);

	// add todo
	const addTodo = (todo) => {
    console.log(todo);
		setTodos((prevTodo) => [todo, ...prevTodo]);
	};

	// update todo
	const updateTodo = (id, todo) => {
		setTodos((prevTodo) =>
			prevTodo.map((todo) => (todo.id === id ? { ...todo, todo } : todo))
		);
	};

	// delete todo
	const deleteTodo = (id) => {
		setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
	};

	// toggle 'completed'
	const toggleComplete = (id) => {
		setTodos((prevTodo) =>
			prevTodo.map((todo) =>
				todo.id === id ? {  ...todo , completed: !todo.completed} : todo
			)
		);
	};

	// localStorage
  // getting data from local storage
  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todos'));
    if(savedTodo && savedTodo.length > 0) setTodos(savedTodo);
  }, []);

  // uploading data on local storage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
		>
			<div className="bg-[#172842] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<h1 className="text-2xl font-bold text-center mb-8 mt-2">
						Manage Your Todos
					</h1>
					<div className="mb-4">
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{todos.map((todo) => (
							<div
								key={todo.id}
								className="w-full"
							>
								<TodoItem todo={todo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}
