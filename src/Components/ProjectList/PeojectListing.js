import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from '../NavBar/NavBar'

const ProjectListing = () => {
    // const isLoginTrue = JSON.parse(localStorage.getItem("login"));

    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/project/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/project/edit/" + id);
    }

    function Removefunction(id) {
        axios
            .delete(`http://dev.nejome.com/api/projects/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(() => {
                // getProjects();
                window.location.reload();
                navigate('/projec/liststing');
            });
    }

    const apiEndPoint = "http://dev.nejome.com/api/projects";
    useEffect(() => {
        const getProjects = async () => {
            const { data: res } = await axios.get(apiEndPoint,
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                }
            );
            setProjects(res);
        }
        getProjects();
    }, [])

    return (
        <>
            <NavBar />
            <div className="container mt-4 shadow p-3 mb-5 bg-white rounded">
                <div className="card mb-4 m-3 shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-title">
                                <h2 className="text-start blue-text text-secondary">Data table</h2>
                            </div>
                <hr className="bg-secondary border-2 border-top border-secondary"></hr>
                    <div className="card-body">
                        <div className="container">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <li>
                                        <h2 className="py-3 text-center font-bold font-up blue-text text-black">Table</h2>
                                    </li>
                                </ul>
                                <div className="text-end">
                                    <div className="row">
                                        <div className="col-md-6">

                                            <input className="form-control mr-sm-2" style={{ width: '300px' }} type="search" placeholder="Search" aria-label="Search" />
                                        </div>
                                        <div className="col-md-6">
                                            <Link to="/project/create" className="btn btn-primary">Add New</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-hover table-responsive mb-0">
                            <thead>
                                <tr>
                                    <th className="th-lg text-muted">title</th>
                                    <th className="th-lg text-muted">description</th>
                                    <th className="th-lg text-muted">date</th>
                                    <th className="th-lg text-muted">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => {
                                    return (
                                        <tr key={project.id}>
                                            <td>{project.title}</td>
                                            <td>{project.description}</td>
                                            <td>{project.date}</td>
                                            <td><a onClick={() => { LoadEdit(project.id) }} className="btn btn-success" style={{ borderRadius: '30px' }}>Edit</a>
                                                <a onClick={() => { Removefunction(project.id) }} className="btn btn-danger" style={{ borderRadius: '30px' }}>Remove</a>
                                                {/* <a onClick={() => { LoadDetail(project.id) }} className="btn btn-primary" style={{ borderRadius: '30px' }}>Details</a> */}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectListing;