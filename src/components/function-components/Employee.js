import { useState } from "react";
import SearchBar from './Search';
import ErrorPageMsg from '../../service/Common'

function Employee() {
    let [items, setItems] = useState([]);
    let [count, setCount] = useState(1);
    let [loading, setLoading] = useState(0);


    if (count === 1 && items.length === 0) {
        count = count + 1;
        setCount(count);
        try {
            fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(res => res.json())
                .then(json => {
                    setLoading(1);

                    console.log(json);
                    setItems(json)
                }
                ).catch((err) => {
                    setLoading(1);

                    return <ErrorPageMsg ></ErrorPageMsg>
                })
        } catch {
            setLoading(1);

            return <ErrorPageMsg ></ErrorPageMsg>
        }
    }


    return (
        <div>

            {loading ? (
                <div>
                    <div>
                        <h2>Employee List</h2>
                    </div>


                    {items ? <SearchBar searchItems={items}></SearchBar> : ''}

                </div>

            ) : (
                <div class="d-flex justify-content-center mt-4">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>

    )





}

export default Employee