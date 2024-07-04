import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';

const PermissionSelector = () => {
    const {selectedOption, setSelectedOption} = useProject();
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/TaskManager');
    };
    const handleBack = () => {
      navigate('/SelectView');
    };

    return (
        <div className=' flex justify-center items-center w-screen h-screen '>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border-2">
            <div className="p-6">
                <h2 className="text-xl leading-tight font-medium text-black text-center">Who can manage projects</h2>
                <p className="mt-2 text-gray-500 mb-10 text-center">Don’t panic — You can also customize these permissions in settings</p>

                <div className="mt-4 space-y-4">
                    <div
                        className={`flex items-center p-4 cursor-pointer border ${selectedOption === 'Everyone' ? 'border-blue-500' : 'border-transparent'} rounded-md hover:border-blue-300`}
                        onClick={() => setSelectedOption('Everyone')}
                    >
                        <i className="fa-solid fa-users h-6 w-6 text-blue-600"></i>
                        <div className="ml-4">
                            <span className="font-medium">Everyone</span>
                            <p className="text-gray-500">All users can now see it, but guests cannot access the projects.</p>
                        </div>
                    </div>

                    <div
                        className={`flex items-center p-4 cursor-pointer border ${selectedOption === 'Only Admins' ? 'border-blue-500' : 'border-transparent'} rounded-md hover:border-blue-300`}
                        onClick={() => setSelectedOption('Only Admins')}
                    >
                        <i className="fa-solid fa-user-shield h-6 w-6 text-blue-600"></i>
                        <div className="ml-4">
                            <span className="font-medium">Only Admins</span>
                            <p className="text-gray-500">Only admins can manage everything.</p>
                        </div>
                    </div>

                    <div
                        className={`flex items-center p-4 cursor-pointer border ${selectedOption === 'Specific People' ? 'border-blue-500' : 'border-transparent'} rounded-md hover:border-blue-300`}
                        onClick={() => setSelectedOption('Specific People')}
                    >
                        <i className="fa-solid fa-user-friends h-6 w-6 text-blue-600"></i>
                        <div className="ml-4">
                            <span className="font-medium">Only to Specific People</span>
                            <p className="text-gray-500">Only some specific people can see it.</p>
                        </div>
                    </div>
                </div>

                <div className="w-2/3 flex justify-between mt-6">
                    <button className="text-slate-500" onClick={handleBack}><i className="fa-solid fa-angle-left mr-2"></i>Back</button>
                    <button className="w-24 py-2 bg-blue-500 text-white rounded-md" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PermissionSelector;
