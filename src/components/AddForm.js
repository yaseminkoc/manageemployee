import { Form, FormGroup, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";
const AddForm = () => {

    const handleSubmit = (event) =>{
        event.preventDefault();
      //  addEmployee(name, email, address, phone);
      dispatch({type:"add_employee", employee:{
        name, email, address, phone
      }});
    }

    const {dispatch} = useContext(EmployeeContext);
  /*  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");*/

    const [newEmployee, setNewEmployee] = useState(
        {
            name:"", email:"", address:"", phone:""
        }
    );

    const {name, email, address, phone} = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value});
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control type="text" placeholder="name *" name = "name" value={name} onChange={e => onInputChange(e)} required/> 
            </FormGroup>

            <FormGroup>
                <Form.Control type="email" placeholder="email *" name = "email" value={email}  onChange={e => onInputChange(e)} required/> 
            </FormGroup>
            <FormGroup>
                <Form.Control as="textarea" placeholder="address" name = "address" value={address} rows={3} onChange={e => onInputChange(e)}/> 
            </FormGroup>
            <FormGroup>
                <Form.Control type="text" placeholder="phone" name = "phone" value={phone} onChange={e => onInputChange(e)}/> 
            </FormGroup>
            <Button variant="success" type="submit" block>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;