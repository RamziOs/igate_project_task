import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const PeojectCreate = () => {

    const [title, titlechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [date, datechange] = useState("");
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const prodata = { title, description, date };


    const apiEndPoint = "http://dev.nejome.com/api/projects";

        axios
            .post(apiEndPoint, {
                title: title,
                description: description,
                date: date,
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(() => {
                navigate('/projec/liststing');
            });
    };

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2 className="py-3 text-center font-bold font-up blue-text text-secondary">projecr Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input required value={title} onMouseDown={e => valchange(true)} onChange={e => titlechange(e.target.value)} className="form-control"></input>
                                            {title.length == 0 && validation && <span className="text-danger">Enter the title</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea value={description} onChange={e => descriptionchange(e.target.value)} className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input value={date} type='date' onChange={e => datechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group m-3 text-center">
                                            <button className="btn btn-success m-1" type="submit">Save</button>
                                            <Link to="/projec/liststing" className="btn btn-danger m1">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default PeojectCreate;