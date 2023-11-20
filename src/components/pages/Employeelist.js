import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeList(prop) {
    const navigate = useNavigate();

    let [items, setItems] = useState(prop.items);
    function DeleteEmp(id) {

        fetch('https://dummy.restapiexample.com/public/api/v1/delete/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            console.log(items);
            const updatedItems = items.filter((item) => item.id !== id);
            setItems(updatedItems);
        }
        )
    }

    return (
        <div>
            {prop.items ? (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {items.map((item, i) => (
                        <div className="col">
                            <div className="card h-100">

                                <div className="card-body">
                                    <i onClick={() => DeleteEmp(item.id)} className="fa fa-minus btn btn-danger btn-sm float-end"></i>
                                    <div onClick={() => navigate("profile/" + item.id)}>
                                        <img src={item.imageUrl} alt="profile_img" className="card-img-top w-50" />
                                        <h5 className="card-title mt-4">{item.firstName} {item.lastName}</h5>
                                        <p className="card-text">{item.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                <p>Data not found</p>
            )}
        </div>
    )
}

export default EmployeeList

