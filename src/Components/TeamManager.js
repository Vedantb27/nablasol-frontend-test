import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeamManager = () => {
    const initialTeam = [
        'Fanny Russell',
        'Rodney Meyer',
        'Ellen Simmons',
        'Virgie Kim',
        'Emma Castro'
    ];

    const [team, setTeam] = useState(initialTeam);
    const [newPerson, setNewPerson] = useState('');
    const [pendingPersons, setPendingPersons] = useState([]);
    const navigate = useNavigate();
   

    const handleSubmit = () => {
        console.log("Project is saved succesfully");
        navigate('/');
        alert("Project is saved succesfully");
        
      };
    
    const handleBack = () => {
      navigate('/TaskManager');
    };


    const handleAddPerson = () => {
        if (newPerson.trim() !== '') {
            setTeam([...team, newPerson.trim()]);
            setNewPerson('');
        }
    };

    const handleRemovePerson = (person) => {
        setTeam(team.filter(p => p !== person));
        setPendingPersons(pendingPersons.filter(p => p !== person));
    };

    const handleTogglePerson = (person) => {
        if (pendingPersons.includes(person)) {
            setPendingPersons(pendingPersons.filter(p => p !== person));
        } else {
            setPendingPersons([...pendingPersons, person]);
        }
    };

    return (
        <div className=' w-full h-full mt-24 '>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border-2 p-6">
            <h2 className="text-xl leading-tight font-medium text-black text-center">Team</h2>

            <div className="mt-6">
                <label className="block text-gray-700">Invite or Add a person</label>
                <div className="flex mt-2 relative">
                    <input
                        type="text"
                        value={newPerson}
                        onChange={(e) => setNewPerson(e.target.value)}
                        className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        placeholder="Enter a new person"
                    />
                    <button
                        onClick={handleAddPerson}
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>

            <ul className="mt-6 space-y-4 max-h-72 overflow-y-auto">
                {team.map((person) => (
                    <li
                        key={person}
                        className="flex items-center justify-between py-4 border-b border-gray-300"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={pendingPersons.includes(person)}
                                onChange={() => handleTogglePerson(person)}
                            />
                            <span className="ml-3">{person}</span>
                        </div>
                        <button
                            className="text-gray-400 hover:text-gray-600"
                            onClick={() => handleRemovePerson(person)}
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>

            <div className="w-2/3 flex justify-between mt-4">
                <button className="text-slate-500" onClick={handleBack}><i className="fa fa-angle-left mr-2"></i>Back</button>
                <button className="py-2 px-4 bg-blue-500 text-white rounded-md" onClick={handleSubmit}>Create Project</button>
            </div>
        </div>
        </div>
    );
};


export default TeamManager;
