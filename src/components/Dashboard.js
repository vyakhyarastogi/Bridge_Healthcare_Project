// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const Dashboard = () => {
//     const data = {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//         datasets: [
//             {
//                 label: 'Doctor Acquisition',
//                 data: [12, 19, 3, 5, 2, 3],
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 borderWidth: 2,
//                 fill: false,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
//             <div className="h-64">
//                 <Line data={data} options={options} />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


// src/components/Topbar.js
import React from 'react';
import { HomeIcon, ChartBarIcon, UserGroupIcon, ClipboardListIcon } from '@heroicons/react/solid';

import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    // Chart Data
    const lineChartData = {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Doctor Acquisition',
                data: [30, 50, 40, 60, 80, 70, 90, 100, 80, 60, 70, 100],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'Income Accumulation',
                data: [20, 30, 40, 50, 60, 70, 80, 90, 70, 50, 60, 90],
                borderColor: 'blue',
                fill: false,
            },
        ],
    };

    const barChartData = {
        labels: ['Completed', 'Cancelled'],
        datasets: [
            {
                label: 'Consultations',
                data: [35000, 10000],
                backgroundColor: ['#3498db', '#e74c3c'],
            },
        ],
    };

    return (
        <div className="flex h-screen">

            {/* Main Content */}
            <div className="flex-1">
                {/* Topbar */}
                <div className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
                    <input type="text" placeholder="Search..." className="border rounded p-2" />
                    <div className="flex items-center">
                        <div className="mr-4">Admin Name</div>
                        <img src="https://via.placeholder.com/30" alt="User Avatar" className="rounded-full" />
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                    <div className="grid grid-cols-6 gap-6 mb-6">
                        {/* Top statistics cards */}
                        {['Total Patients', 'Total TDMs', 'Total Doctors', 'Total Consultations', 'Active TDMs', 'Active Doctors'].map((title, idx) => (
                            <div key={idx} className="bg-white shadow rounded p-6 text-center">
                                <div className="text-2xl font-bold">3540</div>
                                <div className="text-gray-500">{title}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-6 ">
                        {/* Line charts */}
                        <div className="bg-white shadow rounded p-6">
                            <h2 className="text-xl font-bold mb-4">Doctor Acquisition</h2>
                            <Line data={lineChartData} />
                        </div>
                        <div className="bg-white shadow rounded p-6">
                            <h2 className="text-xl font-bold ">Income Accumulation</h2>
                            <Line data={lineChartData} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 mt-5 ">
                        {/* Bar charts */}
                        <div className="bg-white shadow rounded p-4">
                            <h2 className="text-xl font-bold ">Consultation Timeliness</h2>
                            <Bar data={barChartData} />
                        </div>

                        {/* Other statistics */}
                        {/* <div className="bg-white shadow rounded p-6">
                            <h2 className="text-xl font-bold flex items-center justify-center gap-11">Consultation Insights</h2>
                            <div className='flex items-center justify-center '>
                                <ul >
                                    <li>Daily Consultation: 124</li>
                                    <li>Consultation Duration: 21:00</li>
                                    <li>Avg Consultation Fee: ₹300</li>
                                    <li>Mini-Consultation Fee: ₹145</li>
                                    <li>Max Consultation Fee: ₹650</li>
                                </ul>
                            </div>
                        </div> */}
                        <div className=" bg-white shadow rounded p-6 flex flex-col items-center m-5">
                            <h2 className="l font-bold mb-4">Consultation Insights</h2>
                            <div className="flex flex-col flex-wrap justify-center ">
                                <div className=" p-4 rounded-lg text-center flex flex-row items-center gap-10">
                                    <span className=" bg-purple-300 text-purple-400 border rounded-md p-3 font-bold">124</span>
                                    <span className="text-gray-500 ">Daily Consultation</span>



                                </div>

                                <div className=" p-4 rounded-lg text-center flex flex-row items-center gap-10">
                                    <span className=" bg-green-200 text-green-500 border rounded-md p-3 font-bold">9:00</span>
                                    <span className="text-gray-500 ">Consultation Duration</span>



                                </div>

                                <div className=" p-4 rounded-lg text-center flex flex-row items-center gap-10">
                                    <span className=" bg-red-500 text-red-100 border rounded-md p-3 font-bold">300/-</span>
                                    <span className="text-gray-500 ">Avg Consultation fee</span>



                                </div>

                                <div className=" p-4 rounded-lg text-center flex flex-row items-center gap-10">
                                    <span className=" bg-blue-300 text-blue-100 border rounded-md p-3 font-bold">600/-</span>
                                    <span className="text-gray-500 ">Max Consultation fee</span>



                                </div>
                                {/* ... other insight items ... */}
                            </div>
                            <button className="mt-4 text-gray-500 font-bold py-2 px-4 border-2 rounded">
                                Select Duration
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6">
                        {/* Server Cost and Bandwidth Overview */}
                        <div className="bg-white shadow rounded p-6">
                            <h2 className="text-xl font-bold mb-4">Server Cost And Bandwidth Overview</h2>
                            <ul>
                                <li>Server Cost Today: ₹1000</li>
                                <li>Bandwidth Usage Today: 300 GB</li>
                                <li>7 Day Average Bandwidth: 320 GB</li>
                                <li>Last Backup: 21/05/2024</li>
                            </ul>
                        </div>

                        {/* Compare Charts Button */}
                        <div className="bg-white shadow rounded p-6 flex items-center justify-center">
                            <button className="bg-gray-800 text-white p-4 rounded">Compare Charts</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
