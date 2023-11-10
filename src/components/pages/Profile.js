import { useEffect, useState } from "react";
import { Get } from '../../service/data'
import ErrorPageMsg from "../../service/Common";
import profileImg from '../../images/images.jpeg';
import { useParams } from 'react-router-dom';


const img = {
  width: '20%',
  height: '20%'
}


export function Profile() {
  let [user, setUser] = useState();
  let [count, setCount] = useState(1);
  let [loading, setLoading] = useState(0);

  const { id } = useParams();


  useEffect(() => {
    if (count === 1) {
      setCount(count + 1);
      Get('https://dummy.restapiexample.com/api/v1/employee/' + id).then(data => {
        if (data && data.status === 'success')
          setUser(data.data);
        setLoading(1);

      }, (err) => {
        setLoading(1);

        return <ErrorPageMsg></ErrorPageMsg>
      })
        .catch(error => {
          setLoading(1);

          return <ErrorPageMsg></ErrorPageMsg>
        });


    }
  });



  return (
    <div>
      {loading ? (
        <div>
          {user ? (
            <div>
              <div className="card p-3">
                <img src={profileImg} style={img} />
                <h3 className="mt-2"> {user.employee_name}</h3>
                <p className="title">Software Developer</p>
                <p>Harvard University</p>
              </div>
            </div>
          ) : (
            <ErrorPageMsg ></ErrorPageMsg>
          )}
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


export default Profile