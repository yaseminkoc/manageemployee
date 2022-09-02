import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
const Employee = ({ employees }) => {
    const {deleteEmployee} = useContext(EmployeeContext);
    return (
        <React.Fragment>
        {
            employees.map((employee) => (
               
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                        <button className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                            <button className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete" onClick={() => deleteEmployee(employee.id)}>&#xE872;</i></button>
                        </td>
                    </tr>
                

            ))
        }
        </React.Fragment>
    );
}

export default Employee;