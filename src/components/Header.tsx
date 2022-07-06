import { ChangeEvent, FormEvent, useState } from 'react';

import todoImage from '../assets/todoLogo.svg';
import PlusIcon from '../assets/PlusIcon.svg';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className="bg-gray-700 flex items-center justify-center h-[12.5rem] relative">
            <img src={todoImage} />

            <form
                className="absolute h-[3.375rem] bottom-[calc(-3.375rem_/_2)] w-full max-w-[46rem] flex gap-[0.5rem] px-1"
                onSubmit={handleSubmit}
            >
                <input
                    placeholder="Adicione uma nova tarefa"
                    className="h-full flex-1 text-gray-100 bg-gray-500 border border-solid border-gray-700 rounded-lg px-[1rem] text-base placeholder:text-gray-300"
                    onChange={onChangeTitle}
                    value={title}
                />
                <button
                    className="h-full px-[1rem] bg-blueDark text-gray-100 border-none rounded-lg flex items-center gap-[0.375rem] font-bold text-sm disabled:opacity-80 disabled:cursor-not-allowed"
                    disabled={!title}
                >
                    Criar
                    <img src={PlusIcon} className="w-5 h-5" />
                </button>
            </form>
        </header>
    )
}