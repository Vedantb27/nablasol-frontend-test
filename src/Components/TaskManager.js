import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskManager = () => {
    const initialTasks = [
        'Marketing Website Design',
        'Branding Design',
        'UI/UX Fundamentals',
        'Wireframe and Prototyping',
        'Style Guide',
        'UX Research and Flows',
        'Layout design',
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
    const [selectedTasks, setSelectedTasks] = useState([]);
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/TeamManager');
    };
    const handleBack = () => {
      navigate('/PermissionSelector');
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (task) => {
        setTasks(tasks.filter(t => t !== task));
        setSelectedTasks(selectedTasks.filter(t => t !== task));
    };

    const handleToggleTask = (task) => {
        if (selectedTasks.includes(task)) {
            setSelectedTasks(selectedTasks.filter(t => t !== task));
        } else {
            setSelectedTasks([...selectedTasks, task]);
        }
    };

    return (
        <div className='w-full h-full mt-24'> 
             <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border-2 p-6">
            <h2 className="text-xl leading-tight font-medium text-black text-center">Tasks</h2>

            <div className="mt-6">
                <label className="block text-gray-700">Add a task</label>
                <div className="flex mt-2 relative">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        placeholder="Enter a new task"
                    />
                    <button
                        onClick={handleAddTask}
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>

            <ul className="mt-6 space-y-4 max-h-72 overflow-y-auto">
                {tasks.map((task) => (
                    <li
                        key={task}
                        className="flex items-center justify-between py-4 border-b border-gray-300"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={selectedTasks.includes(task)}
                                onChange={() => handleToggleTask(task)}
                            />
                            <span className="ml-3">{task}</span>
                        </div>
                        <button
                            className="text-gray-400 hover:text-gray-600"
                            onClick={() => handleRemoveTask(task)}
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
            <div className="w-2/3 flex justify-between mt-4">
                    <button className="text-slate-500" onClick={handleBack}><i className="fa-solid fa-angle-left mr-2"></i>Back</button>
                    <button className="w-24 py-2 bg-blue-500 text-white rounded-md" onClick={handleNext}>Next</button>
                </div>
        </div>
        </div>
       
    );
};


export default TaskManager;
