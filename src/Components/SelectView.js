import React, { useState } from 'react';

const SelectView = () => {
  const [selectedView, setSelectedView] = useState('Board');

  return (
    <div className=' flex justify-center items-center w-screen h-screen '>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 border-2 h-96">
      <h2 className="text-xl font-semibold text-center ">Select a view</h2>
      <p className="text-gray-600 text-sm mb-6  text-center">You can also customize this views in settings</p>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setSelectedView('List')}
          className={`w-2/3 py-4 flex flex-col items-center border rounded-md mr-4 ${selectedView === 'List' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <div className="w-12 h-12 bg-gray-100 mb-2 flex items-center justify-center "><i class="fa-solid fa-list"></i></div>
          <span className="text-gray-700">List</span>
        </button>
        <button
          onClick={() => setSelectedView('Board')}
          className={`w-2/3 py-4 flex flex-col items-center border rounded-md ${selectedView === 'Board' ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <div className="w-12 h-12 bg-gray-100 mb-2 flex items-center justify-center "><i class="fa-solid fa-chess-board"></i></div>
          <span className="text-gray-700">Board</span>
        </button>
      </div>
      <div className=' ml-4 w-2/3 mt-20'>
      <div className="flex justify-between items-center">
        <button className="text-blue-500"><i class="fa-solid fa-angle-left mr-2"></i>Back</button>
        <button className="py-2 px-4 bg-blue-500 text-white rounded-md">Next</button>
      </div>
      </div>
    </div>
     </div>
  );
};

export default SelectView;
