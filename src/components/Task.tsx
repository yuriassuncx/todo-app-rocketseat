import { ITask } from '../App';

import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className="w-full bg-gray-500 border border-solid border-gray-400 p-4 rounded-lg flex items-center justify-between gap-3">
            <button
                className="min-w-[1.125rem] h-[1.125rem]"
                onClick={() => onComplete(task.id)}
            >
                {task.isCompleted 
                    ? <div className='w-full h-full text-purple'><BsFillCheckCircleFill /> </div>
                    : <div className="w-full h-full border-2 border-solid border-blue rounded-[50%]" />
                }
            </button>

            <p
                className={task.isCompleted 
                    ? "text-sm text-gray-300 line-through mr-auto"
                    : "text-sm text-gray-100 mr-auto"
            }>
                {task.title}
            </p>

            <button
                className="text-gray-300"
                onClick={() => onDelete(task.id)}
            >
                <TbTrash size={20} />
            </button>
        </div>
    )
}