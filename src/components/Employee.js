import React from "react";
import EditForm from "./EditForm";
import { useContext, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
const Employee = ({ employee }) => {
    const { deleteEmployee } = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    useEffect(() => {
        handleClose();
    }, [employee]);
    return (
        <React.Fragment>
            {
                <>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phone}</td>
                    <td>
                        <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                        <button className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete" onClick={() => deleteEmployee(employee.id)}>&#xE872;</i></button>
                    </td>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className="modal-header" closeButton>
                            <Modal.Title>
                                Edit Employee
                            </Modal.Title>

                        </Modal.Header>
                        <Modal.Body>
                            <EditForm theEmployee={employee}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} >Close</Button>
                        </Modal.Footer>
                    </Modal>
                </>

            }
        </React.Fragment>
    );
}

export default Employee;