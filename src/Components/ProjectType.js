import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProject } from '../context/ProjectContext';

const ProjectType = () => {
  const {
    hourlyRate,
    setHourlyRate,
    budgetPercentage,
    setBudgetPercentage,
    selectedButton,
    setSelectedButton,
    projectHourlyRate,
    setProjectHourlyRate,
    hoursPerPerson,
    setHoursPerPerson,
    budgetResetsEveryMonth,
    setBudgetResetsEveryMonth,
    sendEmailAlerts,
    setSendEmailAlerts
  } = useProject();

  const navigate = useNavigate();

  const handleNext = () => {
    if (!projectHourlyRate) {
      alert('Please select the project hourly rate.');
      return;
    }
    if (!hourlyRate) {
      alert('Please enter the hourly rate.');
      return;
    }
    if (!hoursPerPerson) {
      alert('Please select the hours per person.');
      return;
    }
    if (sendEmailAlerts && !budgetPercentage) {
      alert('Please enter the budget percentage.');
      return;
    }
    navigate('/SelectView');
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 border-2">
        <h2 className="text-xl font-semibold mb-2 text-center">Project type</h2>
        <p className="text-gray-600 mb-4 text-sm">Don't panic — You can also customize this type in settings</p>

        <div className="mb-6">
          <div className="flex justify-between border-b border-gray-200 mb-4">
            <button
              className={`py-2 px-4 ${selectedButton === 'Time & Materials' ? 'text-white bg-blue-500' : 'text-gray-500'} border-b-2`}
              onClick={() => handleButtonClick('Time & Materials')}
            >
              Time & Materials
            </button>
            <button
              className={`py-2 px-4 ${selectedButton === 'Fixed Fee' ? 'text-white bg-blue-500' : 'text-gray-500'} border-b-2`}
              onClick={() => handleButtonClick('Fixed Fee')}
            >
              Fixed Fee
            </button>
            <button
              className={`py-2 px-4 ${selectedButton === 'Non-Billable' ? 'text-white bg-blue-500' : 'text-gray-500'} border-b-2`}
              onClick={() => handleButtonClick('Non-Billable')}
            >
              Non-Billable
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-black-700">Hourly</label>
            <p className="text-gray-400 mb-2 text-xs">We need hourly rates to track your project's billable amount.</p>
            <div className='flex'>
              <select
                className="w-1/2 h-8 border border-gray-300 rounded-md mb-2"
                value={projectHourlyRate}
                onChange={(e) => setProjectHourlyRate(e.target.value)}
              >
                <option className='text-sm ' value="">Project Hourly Rate</option>
                <option className='text-sm ' value="1 Hourly">1 Hourly</option>
                <option className='text-sm ' value="2 Hourly">2 Hourly</option>
                <option className='text-sm ' value="3 Hourly">3 Hourly</option>
              </select>
              <input
                type="text"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-1/3 h-8 ml-4 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black-700 mb-2">Budget</label>
            <p className="text-gray-600 mb-2 text-sm">We need hourly rates to track your project's billable amount.</p>
            <select
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={hoursPerPerson}
              onChange={(e) => setHoursPerPerson(e.target.value)}
            >
              <option className='text-sm ' value="">Hours per person</option>
              <option className='text-sm ' value="1 Hours">1 Hours</option>
              <option className='text-sm ' value="2 Hours">2 Hours</option>
              <option className='text-sm ' value="3 Hours">3 Hours</option>
              <option className='text-sm ' value="4 Hours">4 Hours</option>
            </select>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={budgetResetsEveryMonth}
                onChange={(e) => setBudgetResetsEveryMonth(e.target.checked)}
              />
              <label className="text-gray-700 text-sm">Budget resets every month</label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="mr-2"
                checked={sendEmailAlerts}
                onChange={(e) => setSendEmailAlerts(e.target.checked)}
              />
              <label className="text-gray-700 text-sm">Send email alerts if project exceeds</label>
              <input
                type="number"
                value={budgetPercentage}
                onChange={(e) => setBudgetPercentage(e.target.value)}
                className="w-10 ml-2 border border-gray-300 rounded-md"
              />
              <span className="ml-2 text-gray-700 text-sm">% of budget</span>
            </div>
          </div>
          <div>
            <div className='w-2/3 flex justify-between'>
              <button className='text-slate-500' onClick={handleBack}><i className="fa-solid fa-angle-left mr-2"></i>Back</button>
              <button className="w-24 py-2 bg-blue-500 text-white rounded-md" onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectType;
