// src/components/RevenueDashboard.jsx

import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './revenue.css';  // Custom styles

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Revenue = () => {
    const lineChartData = {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Our Commission',
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
                borderColor: '#0071bd',
                fill: false,
            },
            {
                label: 'Total Revenue',
                data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86],
                borderColor: '#ffb700',
                fill: false,
            },
        ],
    };

    const pieChartData = {
        labels: ['Online Consultations', 'Offline Consultations', 'Lab Tests', 'Others'],
        datasets: [
            {
                label: 'Revenue Distribution',
                data: [300, 50, 100, 150],
                backgroundColor: ['#0071bd', '#ffb700', '#4caf50', '#ff5252'],
                hoverOffset: 4,
            },
        ],
    };

    return (

        <div>
            <div className="content">
                <header>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="user-info">
                        <span>Admin Name</span>
                        <span>Staff</span>
                    </div>
                </header>

                <main>
                    <h1>Revenue Dashboard</h1>
                    <div className="charts-container">
                        <div className="line-chart">
                            <h2>Income Accumulation Graph</h2>
                            <Line data={lineChartData} />
                        </div>
                        <div className="pie-chart">
                            <h2>Revenue Distribution By Source</h2>
                            <Pie data={pieChartData} />
                        </div>
                    </div>

                    <div className="stats-container">
                        <div className="stat-card">
                            <h3>Total Revenue</h3>
                            <p>₹2,00,000</p>
                        </div>
                        <div className="stat-card">
                            <h3>Total Commission</h3>
                            <p>₹1,50,000</p>
                        </div>
                        <div className="stat-card">
                            <h3>Revenue from Online Consultation</h3>
                            <p>₹10,000</p>
                        </div>
                        <div className="stat-card">
                            <h3>Return of Investment (ROI)</h3>
                            <p>₹1,50,000</p>
                        </div>
                    </div>

                    <div className="averages-container">
                        <div className="average-card">
                            <h3>Average Revenue Per Patient</h3>
                            <p>₹565</p>
                        </div>
                        <div className="average-card">
                            <h3>Average Revenue Per Doctor</h3>
                            <p>₹565</p>
                        </div>
                        <div className="average-card">
                            <h3>Average Revenue Per TDM Machine</h3>
                            <p>₹5065</p>
                        </div>
                    </div>

                    <div className="export-container">
                        <button>Export Data</button>
                    </div>
                </main>
            </div>
        </div >
    );
};

export default Revenue;
