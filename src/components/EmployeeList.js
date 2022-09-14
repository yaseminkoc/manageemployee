import Employee from "./Employee";
import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from "./AddForm";
import { useState } from "react";
import Pagination from "./Pagination";
const EmployeeList = () => {
    const [counter, setCounter] = useState(0);
    const { sortedEmployees } = useContext(EmployeeContext);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage, setEmployeesPerPage] = useState(5);
    const handleShow = () => {setShow(true); }
    const handleClose = () => { setShow(false);  setCounter(counter+1);}
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    } 
        

    useEffect(() => {
       handleClose();
       if(counter !== 0){
           handleShowAlert();}
    }, [sortedEmployees]);

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee,indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);
    
    return (
        <React.Fragment>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                    </div>
                </div>
            </div>
            <Alert show={showAlert} variant="success" >
                Employee List successfully updated.
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                   currentEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <Employee employee={employee}/>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
            <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} employeesPerPage={currentEmployees.length} totalEmployee={sortedEmployees.length} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                  
                </Modal.Header>
                <Modal.Body>
                    <AddForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

export default EmployeeList;