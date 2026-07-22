import type { Task } from "../../types/todo";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList() {
	const initialTasks: Task[] = [
		{
			id: 1,
			description: "Aprender TypeScript",
			state: "Completed",
		},
		{
			id: 2,
			description: "Hacer la compra del supermercado",
			state: "Pending",
		},
		{
			id: 3,
			description: "Preparar la presentación de mañana",
			state: "Pending",
		},
		{
			id: 4,
			description: "Hacer ejercicio (30 min)",
			state: "Completed",
		},
		{
			id: 5,
			description: "Leer un capítulo del libro",
			state: "Pending",
		},
	];

	return (
		<ul>
			{initialTasks.map((initialTask) => (
				<TodoItem task={initialTask} />
			))}
		</ul>
	);
}
