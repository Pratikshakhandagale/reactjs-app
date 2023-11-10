import { useState } from 'react';


function MyButton()
{

    const [count, setCount] = useState(0);

    function handleClick() {
        alert('hi');
    }

    function handleClickAdd() {
        setCount(count + 1)
    }

    function handleClickSub() {
        setCount(count - 1)
    }

    return (
        <div>
        <button  onClick={handleClickAdd} className="btn-primary">Count + </button>
        <button  onClick={handleClickSub} className="btn-danger">Count - </button>

        <h3>Count: {count}</h3>
        
        </div>
    )
}




export default MyButton;