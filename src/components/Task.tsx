import { ITask } from '../App';

import Trash from '../assets/Trash.svg';
import CheckIcon from '../assets/CheckIcon.svg';

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
                    ? <img src={CheckIcon} className='w-full h-full text-purple' />
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
                <img src={Trash} className="w-5 h-5" />
            </button>
        </div>
    )
}