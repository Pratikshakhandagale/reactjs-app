import React, { useState } from 'react';
import { Post } from '../../service/data'

function Skill() {
    // Create state variables to store form input values
    const [skill, setSkill] = useState('');
    const [description, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let params = {
            "skill": skill,
            "description": description,
        }

        Post('https://dummy.restapiexample.com/api/v1/create', params);

    };

    return (
        <div>
            <h2>Add Skill</h2>
            <form onSubmit={handleSubmit} className='m-4' >
                <div className='form-group m-2'>
                    <label htmlFor="firstName">Skill:
                        <input className="form-control" type="text" id="skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
                    </label>
                </div>
                <div className='form-group m-2' >
                    <label htmlFor="lastName">Description:
                        <input className="form-control" type="text" id="description" value={description} onChange={(e) => setDesc(e.target.value)} />
                    </label>
                </div>


                <button type="submit" className='m-2'>Submit</button>
            </form>
        </div>
    );
}

export default Skill
