
import { Link } from 'react-router-dom';
import React from 'react';
import { HomeIcon, ChartBarIcon, UserGroupIcon, ClipboardListIcon } from '@heroicons/react/solid';

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

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 h-[1200px] p-4">
            <div className="flex items-center justify-center text-2xl font-bold mb-10">
                <h1 className="text-2xl font-bold">Bharat TDM</h1>
            </div>
            <nav>
                <ul>
                    <li> <Link to="/dashboard" className="mb-6 flex items-center">
                        <HomeIcon className="h-5 w-5 mr-2" />
                        Dashboards
                    </Link></li>
                    <li ><Link to="/TDM" className="mb-6 flex items-center">
                        <ChartBarIcon className="h-5 w-5 mr-2" />
                        TDM
                    </Link> </li>
                    <li> <Link to="/TDMLocations" className="mb-6 flex items-center">
                        <UserGroupIcon className="h-5 w-5 mr-2" />
                        TDM Locations
                    </Link></li>

                    <li> <Link to="/revenue" className="mb-6 flex items-center">
                        <ClipboardListIcon className="h-5 w-5 mr-2" />
                        Revenue Management
                    </Link></li>

                </ul>
            </nav>
            <div className="bg-gray-800 flex items-center justify-center min-h-screen">
                {/* <button className='border-2 border-white rounded-md p-2 m-20 ' >Log out</button> */}

                <button className="bg-gray-700 text-white p-2 text-center rounded-lg  w-32 shadow-lg transform transition-transform duration-300 hover:scale-105">
                    Log Out
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;
