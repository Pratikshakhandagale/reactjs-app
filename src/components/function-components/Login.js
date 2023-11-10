import Employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();


    function DoLogin() {

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: document.getElementsByName('uname')[0]?.value,
                password: document.getElementsByName('pwd')[0]?.value,
            })
        }).then((res) => {
            alert('Login Successfully..!!');
            localStorage.setItem('isLogged', true);
            navigate('/employee');

        });

    }

    return (
        <div className="cd-bg p-4 w-50">
            <div className='my-7'>
                <h1>Admin Login Screen </h1>
            </div>
            <div>
                <label className='m-3 h4'>Username:</label>
                <input type="text" className='p-2 w-50' name="uname" defaultValue={'kminchelle'}></input>
            </div>

            <div>
                <label className='m-3 h4'>Password: </label>
                <input type="text" className='p-2 w-50' name='pwd' defaultValue={'0lelplR'}></input>
            </div>

            <button onClick={DoLogin} className='btn btn-lg px-5 mt-3 btn-primary'>Login</button> <br />

        </div>
    )

}

export default Login