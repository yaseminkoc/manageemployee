import React from "react";
import EditForm from "./EditForm";
import { useContext, useState, useEffect } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
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
                        <OverlayTrigger
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Edit
                                </Tooltip>
                            }>
                             <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" >&#xE254;</i></button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    Delete
                                </Tooltip>
                            }>
                            <button className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" onClick={() => deleteEmployee(employee.id)}>&#xE872;</i></button>
                        </OverlayTrigger>
                       
                        
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