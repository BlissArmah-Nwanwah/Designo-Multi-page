import { useState } from 'react';
import './contact.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    // <Form noValidate validated={validated} onSubmit={handleSubmit} className="form">
    //   <Row className="mb-3 flex">
    //     <Form.Group as={Col} md="4" controlId="validationCustom01">
    //       <Form.Label >First name</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="First name"
    //         defaultValue="Mark"
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group  md="4" controlId="validationCustom02">
    //       <Form.Label>Last name</Form.Label>
    //       <Form.Control
    //         required
    //         type="text"
    //         placeholder="Last name"
    //         defaultValue="Otto"
    //       />
    //       <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="4" controlId="validationCustomUsername">
    //       <Form.Label>Username</Form.Label>
    //       <InputGroup hasValidation>
    //         <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
    //         <Form.Control
    //           type="text"
    //           placeholder="Username"
    //           aria-describedby="inputGroupPrepend"
    //           required
    //         />
    //         <Form.Control.Feedback type="invalid">
    //           Please choose a username.
    //         </Form.Control.Feedback>
    //       </InputGroup>
    //     </Form.Group>
    //   </Row>
    //   <Row className="mb-3">
    //     <Form.Group as={Col} md="6" controlId="validationCustom03">
    //       <Form.Label>City</Form.Label>
    //       <Form.Control type="text" placeholder="City" required />
    //       <Form.Control.Feedback type="invalid">
    //         Please provide a valid city.
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="3" controlId="validationCustom04">
    //       <Form.Label>State</Form.Label>
    //       <Form.Control type="text" placeholder="State" required />
    //       <Form.Control.Feedback type="invalid">
    //         Please provide a valid state.
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //     <Form.Group as={Col} md="3" controlId="validationCustom05">
    //       <Form.Label>Zip</Form.Label>
    //       <Form.Control type="text" placeholder="Zip" required />
    //       <Form.Control.Feedback type="invalid">
    //         Please provide a valid zip.
    //       </Form.Control.Feedback>
    //     </Form.Group>
    //   </Row>
    //   <Form.Group className="mb-3">
    //     <Form.Check
    //       required
    //       label="Agree to terms and conditions"
    //       feedback="You must agree before submitting."
    //       feedbackType="invalid"
    //     />
    //   </Form.Group>
    //   <Button type="submit">Submit form</Button>
    // </Form>
    <>
    <form>
      <input placeholder='Name'></input>
      <hr></hr>
      <input placeholder='Email Address'></input>
      <hr></hr>
      <input placeholder='Phone'></input>
      <hr></hr>
      <textarea placeholder='Your Message'></textarea>
      <hr></hr>
     <Button type="submit" className='btn'>Submit</Button>

    </form>
    </>
  );
  
}

export default Contact