import React, { useState } from 'react';
import { Post, Get } from '../../service/data'

function AddEmployee() {
    // Create state variables to store form input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDOB] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        let params = {
            "firstName": firstName, "lastName": lastName,
            "email": email, "address": address, "dob": dob,
            "imageUrl": imageUrl
        }

        Post('https://dummy.restapiexample.com/api/v1/create', params);

    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit} className='m-4' >
                <div className='form-group m-2'>
                    <label htmlFor="firstName">Name:
                        <input className="form-control" type="text" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                </div>
                <div className='form-group m-2' >
                    <label htmlFor="lastName">Last Name:
                        <input className="form-control" type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>
                <div className='form-group m-2' >
                    <label htmlFor="email">Email:
                        <input className="form-control" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>

                <div className='form-group m-2' >
                    <label htmlFor="address">Address :
                        <input className="form-control" type="textarea" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>
                </div>
                <div className='form-group m-2' >
                    <label htmlFor="dob">DOB:
                        <input className="form-control" type="date" id="dob" value={dob} onChange={(e) => setDOB(e.target.value)} />
                    </label>
                </div>
                <div className='form-group m-2' >
                    <label htmlFor="imageUrl"> Image Upload:
                        <input className="form-control" type="file" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    </label>
                </div>
                <button type="submit" className='m-2'>Submit</button>
            </form>
        </div>
    );
}

export default AddEmployee;
