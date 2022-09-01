import { Form, FormGroup, Button } from "react-bootstrap";
const AddForm = () => {
    return(
        <Form>
            <FormGroup>
                <Form.Control type="text" placeholder="name *" required/> 
            </FormGroup>

            <FormGroup>
                <Form.Control type="email" placeholder="email *" required/> 
            </FormGroup>
            <FormGroup>
                <Form.Control as="textarea" placeholder="address" rows={3}/> 
            </FormGroup>
            <FormGroup>
                <Form.Control type="text" placeholder="phone"/> 
            </FormGroup>
            <Button variant="success" type="submit" block>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;