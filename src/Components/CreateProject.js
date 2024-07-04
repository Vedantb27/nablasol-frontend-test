import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
    const [newClient, setNewClient] = useState('');
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    const handleAddClient = () => {
        if (newClient.trim() === '') {
            alert('Input tag is empty');
        } else {
            setClients([...clients, { value: newClient, label: newClient }]);
            alert('New client added successfully');
            setNewClient('');
        }
    };

    const handleNext = () => {
        navigate('/ProjectType');
    };

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className="flex flex-col space-y-4 w-full max-w-md mx-auto p-8 border-2">
                <div>
                    <h1 className="text-xl font-bold text-center">Create a project</h1>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="project_name" className="text-sm font-medium">Project name</label>
                    <input
                        type="text"
                        id="project_name"
                        className="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter project name here"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="client" className="text-sm font-medium">Client</label>
                    <div className='flex justify-around'>
                        <div className="relative w-1/2">
                            <select
                                id="client"
                                className="shadow-sm border border-gray-300 rounded-md w-full cursor-pointer p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Select a client</option>
                                <option value="Apple">Apple </option>
                                <option value="Google">Google</option>
                                {clients.map(client => (
                                    <option key={client.value} value={client.value}>{client.label}</option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center mr-4">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </div>
                        </div>
                        <p className='ml-4 mr-4'>OR</p>
                        <div className='border border-gray-300 w-2/4 flex items-center rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
                            <i className="fa-solid fa-plus ml-2 cursor-pointer" onClick={handleAddClient}></i>
                            <input
                                type="text"
                                value={newClient}
                                onChange={(e) => setNewClient(e.target.value)}
                                className="shadow-sm w-full ml-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="New client"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="dates" className="text-sm font-medium">Dates</label>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="date"
                            id="start_date"
                            className="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Start Date"
                        />
                        <input
                            type="date"
                            id="end_date"
                            className="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="End Date"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="notes" className="text-sm font-medium">Notes</label>
                    <textarea
                        id="notes"
                        rows="3"
                        className="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Optional"
                    ></textarea>
                </div>
                <div className="w-2/3 flex justify-between mt-6">
                    <button className="text-slate-500" onClick={()=>console.log("back")}><i className="fa-solid fa-angle-left mr-2"></i>Back</button>
                    <button className="w-24 py-2 bg-blue-500 text-white rounded-md" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;
