import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    // CreateProject state variables
    const [newClient, setNewClient] = useState('');
    const [clients, setClients] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [selectedClient, setSelectedClient] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [notes, setNotes] = useState('');

    // ProjectType state variables
    const [hourlyRate, setHourlyRate] = useState('₹12,678.00');
    const [budgetPercentage, setBudgetPercentage] = useState(80);
    const [selectedButton, setSelectedButton] = useState('Time & Materials');
    const [projectHourlyRate, setProjectHourlyRate] = useState('');
    const [hoursPerPerson, setHoursPerPerson] = useState('');
    const [budgetResetsEveryMonth, setBudgetResetsEveryMonth] = useState(false);
    const [sendEmailAlerts, setSendEmailAlerts] = useState(false);

    // SelectView state variables
    const [selectedView, setSelectedView] = useState('Board');

    // PermissionSelector state variables
    const [selectedOption, setSelectedOption] = useState('Only Admins');

    // TaskManager state variables
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

    // TeamManager state variables
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

    return (
        <ProjectContext.Provider value={{
            newClient,
            setNewClient,
            clients,
            setClients,
            projectName,
            setProjectName,
            selectedClient,
            setSelectedClient,
            startDate,
            setStartDate,
            endDate,
            setEndDate,
            notes,
            setNotes,
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
            setSendEmailAlerts,
            selectedView,
            setSelectedView,
            selectedOption,
            setSelectedOption,
            tasks,
            setTasks,
            newTask,
            setNewTask,
            selectedTasks,
            setSelectedTasks,
            team,
            setTeam,
            newPerson,
            setNewPerson,
            pendingPersons,
            setPendingPersons
        }}>
            {children}
        </ProjectContext.Provider>
    );
};



export const useProject = () => useContext(ProjectContext);
