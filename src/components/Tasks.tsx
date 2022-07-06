import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../App";
import { Task } from "./Task";

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className="w-full max-w-[46rem] m-auto mt-[5.625rem] px-[1rem]">
            <header className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <p className="text-blue font-bold text-xs md:text-sm">
                        Tarefas criadas
                    </p>
                    <span className="bg-gray-400 text-gray-200 py-1 px-4 rounded-full text-xs font-bold">
                        {tasksQuantity}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <p className="text-purple font-bold text-xs md:text-sm">Concluídas</p>
                    <span className="bg-gray-400 text-gray-200 py-1 px-4 rounded-full text-xs font-bold">
                        {completedTasks} de {tasksQuantity}
                    </span>
                </div>
            </header>

            <div className="flex flex-col gap-3">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className="mt-16 flex flex-col items-center justify-center gap-4 text-gray-300 text-center">
                        <div className="opacity-30">
                            <TbClipboardText size={50} />
                        </div>
                        <div>
                            <p className="font-bold">Você ainda não possui tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}