import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MembershipPlan() {

    return (
        <>     <div className='backgroundColor'>
            <form className='moduleContents formsBackground membershipPlan backgroundImages'>
            <h2 className='membershipPlanHeading'>Membership Plan</h2>
            <hr />
                <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
                    <Form.Label>Plan</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select menu</option>
                        <option value="1">1 Month Plan</option>
                        <option value="2">3 Month Plan</option>
                        <option value="3">6 Month Plan</option>
                        <option value="3">1 Year Plan</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Become our Member
                </Button>
            </form>
            </div>
        </>
    );
}

export default MembershipPlan