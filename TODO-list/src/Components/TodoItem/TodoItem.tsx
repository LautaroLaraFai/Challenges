import type { Task } from "../../types/todo";
type Props = {
	task: Task;
};

export function TodoItem({ task }: Props) {
	return <li>{task.description}</li>;
}
