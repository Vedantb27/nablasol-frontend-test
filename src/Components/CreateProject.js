import React from 'react'
import { useState } from 'react';

const CreateProject = () => {
    const [newClient, setNewClient] = useState('');
    const [clients, setClients] = useState([
        
    ]);

    const handleAddClient = () => {
        if (newClient.trim() === '') {
            alert('Input tag is empty');
        } else {
            setClients([...clients, { value: newClient, label: newClient }]);
            alert('New client added successfully');
            setNewClient('');
        }
    };
    return (
        <div className='main flex justify-center items-center w-screen h-screen '>

            <div class="flex flex-col space-y-4 w-full max-w-md mx-auto p-8 border-2 ">
                <div>
                    <h1 class="text-xl font-bold text-center">Create a project</h1>
                </div>
                <div class="flex flex-col space-y-1">
                    <label for="project_name" class="text-sm font-medium">Project name</label>
                    <input type="text" id="project_name" class="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter project name here"/>
                </div>
                <div class="flex flex-col space-y-1">
                    <label for="client" class="text-sm font-medium">Client</label>
                    <div className='flex justify-around'>
                    <div class="relative w-1/2">
                        <select id="client" class="shadow-sm border border-gray-300 rounded-md w-full cursor-pointer p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="">Select a client</option>
                            <option value="Apple">Apple </option>
                            <option value="Google">Google</option>
                            {clients.map(client => (
                                    <option key={client.value} value={client.value}>{client.label}</option>
                                ))}
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center mr-4">
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>
                        </div>
                    </div>
                    <p className='ml-4 mr-4'>OR</p>
                    <div className='border border-gray-300 w-2/4 flex items-center rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'>
                    <i class="fa-solid fa-plus ml-2 cursor-pointer" onClick={handleAddClient}></i>
                    <input type="text" value={newClient} onChange={(e) => setNewClient(e.target.value)} className="shadow-sm w-full ml-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="New client"/>
                    </div>
                   
                    </div>


                </div>
                <div class="flex flex-col space-y-1">
                    <label for="dates" class="text-sm font-medium">Dates</label>
                    <div class="grid grid-cols-2 gap-4">
                        <input type="date" id="start_date" class="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Start Date"/>
                            <input type="date" id="end_date" class="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="End Date"/>
                            </div>
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label for="notes" class="text-sm font-medium">Notes</label>
                        <textarea id="notes" rows="3" class="shadow-sm border border-gray-300 rounded-md w-full p-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Optional"></textarea>
                    </div>
                    <div className=' ml-4 w-1/2'>
                    <div class="flex justify-between items-center pt-4">
                        <button class="">Back</button>
                        <button class="text-white bg-sky-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-500">Next</button>
                    </div>
                    </div>
                </div>


            </div>
            )
}

export default CreateProject