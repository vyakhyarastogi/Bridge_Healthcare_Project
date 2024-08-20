import React from 'react';

const Doctor = () => {
    const doctors = [
        { id: 1, name: 'Dr. John Doe', email: "john@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-01' },
        {
            id: 2, name: 'Dr. Jane Smith', email: "jane@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        },
        {
            id: 3, name: 'Dr.Peter', email: "peter@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        },
        {
            id: 4, name: 'Dr. sylvia', email: "sylvia@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        },
        {
            id: 5, name: 'Dr.  kahn Smith', email: "kahn@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        },
        {
            id: 6, name: 'Dr.Sivia', email: "sivia@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        },
        {
            id: 7, name: 'Dr. Han ', email: "han@123gmail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        },
        {
            id: 8, name: 'Dr. Jane Smith', email: "j@123g,ail.com", phone_number: 74289270, dateAdded: '2024-08-02'

        }


    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Doctors Added</h2>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/6 py-2">ID</th>
                        <th className="w-1/6 py-2">Name</th>
                        <th className="w-1/6 py-2">Email</th>
                        <th className="w-1/6 py-2">Phone Number</th>
                        <th className="w-1/6 py-2">Date Added</th>

                    </tr>
                </thead>
                <tbody>
                    {doctors.map(doctor => (
                        <tr key={doctor.id}>
                            <td className="border px-4 py-2">{doctor.id}</td>
                            <td className="border ">{doctor.name}</td>
                            <td className="border ">{doctor.email}</td>
                            <td className="border ">{doctor.phone_number}</td>
                            <td className="border">{doctor.dateAdded}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Doctor;
