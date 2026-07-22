export type Task = {
	id: number;
	description: string;
	state: "Completed" | "Pending";
};

export type Filter = "All" | "Completed" | "Pending";
