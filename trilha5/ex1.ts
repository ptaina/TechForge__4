abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string>;

    constructor() {
        super();
        this.tasks = new Set();
    }

    addTask(task: string): void {
        this.tasks.add(task); 
    }

    listTasks(): string[] {
        return Array.from(this.tasks); 
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string>; 

    constructor() {
        super();
        this.tasks = new Set();
    }

    addTask(task: string): void {
        this.tasks.add(task); 
    }

    listTasks(): string[] {
        return Array.from(this.tasks); 
    }
}

const project = new Project();
project.addTask("Projeto 1");
project.addTask("Projeto 2");
project.addTask("Projeto 3"); 

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Tarefa 1");
dailyTasks.addTask("Tarefa 2");
dailyTasks.addTask("Tarefa 3"); 

console.log("Tarefas do Projeto:");
console.log(project.listTasks());

console.log("Tarefas Diárias:");
console.log(dailyTasks.listTasks());