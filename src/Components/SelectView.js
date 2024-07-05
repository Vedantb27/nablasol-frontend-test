import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';

const SelectView = () => {
  const {selectedView, setSelectedView} =   useProject() ;
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/PermissionSelector');
};
const handleBack = () => {
  navigate('/ProjectType');
};
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-slate-200'>
  <div className="max-w-md w-full mx-4 sm:mx-auto bg-white shadow-md rounded-md p-6 border-2 rounded-xl">
    <h2 className="text-xl font-semibold text-center">Select a view</h2>
    <p className="text-gray-600 text-sm mb-6 text-center">You can also customize this view in settings</p>
    
    <div className="flex justify-center mb-6">
      <button
        onClick={() => setSelectedView('List')}
        className={`w-2/3 py-4 flex flex-col items-center border rounded-md mr-4 ${selectedView === 'List' ? 'border-blue-500' : 'border-gray-300'}`}
      >
        <div className="w-12 h-12 bg-gray-100 mb-2 flex items-center justify-center"><i className="fa-solid fa-list"></i></div>
        <span className="text-gray-700">List</span>
      </button>
      <button
        onClick={() => setSelectedView('Board')}
        className={`w-2/3 py-4 flex flex-col items-center border rounded-md ${selectedView === 'Board' ? 'border-blue-500' : 'border-gray-300'}`}
      >
        <div className="w-12 h-12 bg-gray-100 mb-2 flex items-center justify-center"><i className="fa-solid fa-chess-board"></i></div>
        <span className="text-gray-700">Board</span>
      </button>
    </div>
    <div className="w-full sm:w-2/3 flex justify-between mt-16">
      <button className="text-slate-500" onClick={handleBack}><i className="fa-solid fa-angle-left mr-2"></i>Back</button>
      <button className="w-24 py-2 bg-blue-500 text-white rounded-md" onClick={handleNext}>Next</button>
    </div>
  </div>
</div>

  );
};

export default SelectView;