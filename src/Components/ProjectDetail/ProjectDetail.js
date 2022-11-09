import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ProjectDetail = () => {
    const { proid } = useParams();
    const [prodata, prodatachange] = useState({});

    useEffect(() => {
        axios.get(`"http://dev.nejome.com/api/projects/"${proid}`,  {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            prodatachange(resp);
            console.log(prodata);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>project Create</h2>
                    </div>
                    <div className="card-body"></div>
                    {prodata &&
                        <div>
                            <h2>The Project is : <b>{prodata.title}</b></h2>
                            <h3>Project Details</h3>
                            <h5>Title is : {prodata.title}</h5>
                            <h5>Description is : {prodata.description}</h5>
                            <h5>date is : {prodata.date}</h5>
                            <Link className="btn btn-danger" to="/projec/liststing">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default ProjectDetail;