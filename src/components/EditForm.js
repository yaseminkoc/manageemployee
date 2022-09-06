import { Form, FormGroup, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";
const EditForm = ({theEmployee}) => {

    const {updateEmployee} = useContext(EmployeeContext);
    const employee = theEmployee;
    const id = employee.id;
    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);
    const updatedEmployee = {name, email, address, phone}
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateEmployee(id, updatedEmployee);
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name *" name = "name" required/> 
            </FormGroup>

            <FormGroup>
                <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email *" name = "email" required/> 
            </FormGroup>
            <FormGroup>
                <Form.Control onChange={(e) => setAddress(e.target.value)} value={address} as="textarea" placeholder="address" name = "address" rows={3}/> 
            </FormGroup>
            <FormGroup>
                <Form.Control onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder="phone" name = "phone" /> 
            </FormGroup>
            <Button variant="success" type="submit" block>Edit Employee</Button>
        </Form>
    )
}

export default EditForm;