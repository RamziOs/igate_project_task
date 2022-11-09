import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectEdit = () => {
    const { proid } = useParams();

    //const [prodata, prodatachange] = useState({});

    useEffect(() => {
        fetch("http://dev.nejome.com/api/projects/" + proid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            titlechange(resp.name);
            descriptionchange(resp.email);
            dateechange(resp.phone);
            // activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("");
    const [title, titlechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [date, dateechange] = useState("");
    // const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const prodata = { id, title, description, date};


        fetch("http://dev.nejome.com/api/projects/" + proid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(prodata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2 className="text-center font-bold font-up blue-text text-secondary">project Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>title</label>
                                            <input required value={title} onMouseDown={e => valchange(true)} onChange={e => titlechange(e.target.value)} className="form-control"></input>
                                            {title.length == 0 && validation && <span className="text-danger">Enter the title</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>description</label>
                                            <textarea value={description} onChange={e => descriptionchange(e.target.value)} className="form-control"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>date</label>
                                            <input value={date} onChange={e => dateechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group m-3 text-center">
                                            <button className="btn btn-success m-1" type="submit">Save</button>
                                            <Link to="/project/create" className="btn btn-danger m-1">Back</Link>
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

export default ProjectEdit;