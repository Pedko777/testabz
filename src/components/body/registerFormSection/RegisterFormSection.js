import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// // import usersSelectors from '../../../redux/users/usersSelectors';

import styles from './registerFormSection.module.scss';
import usersOperations from '../../../redux/users/usersOperations';
import {
  Form,
  Label,
  FormGroup,
  FormFeedback,
  Button,
  Input,
  Col,
  Row,
  CustomInput,
} from 'reactstrap';

import * as Yup from 'yup';

const RegisterFromSection = () => {
  const [name, setName] = useState('');
  const handleInputName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const [email, setEmail] = useState('');
  const handleInputEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const [phone, setPhone] = useState('');
  const handleInputPhone = e => {
    e.preventDefault();
    setPhone(e.target.value);
  };

  const [position_id, setPositionId] = useState('');
  const handleInputPositionId = e => {
    e.preventDefault();
    setPositionId(e.target.value);
  };

  const [photo, setPhoto] = useState(undefined);
  const handleInputPhoto = e => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.fetchToken());
  }, []);

  useEffect(() => {
    dispatch(usersOperations.fetchPositions());
  }, []);

  const positions = useSelector(state => state.positions);

  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    dispatch(
      usersOperations.postData({ name, email, phone, position_id, photo }),
    );
  };

  return (
    <div className={`${styles.sectionWrapper} container`}>
      <div className={` wrapper`}>
        <h2 className={styles.sectionTitle}>Register to get a work</h2>
        <p className={styles.sectionDescription}>
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>

        <div>
          <Row>
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    onChange={handleInputName}
                    invalid={false}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    onChange={handleInputEmail}
                    invalid={false}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    onChange={handleInputPhone}
                    invalid={false}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your phone"
                  />
                  <FormFeedback>Phone error</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <legend>Select your position</legend>
                  <Label for="exampleCheckbox">Radios</Label>
                  <div>
                    {positions &&
                      positions.map(position => (
                        <CustomInput
                          onChange={handleInputPositionId}
                          value={position.id}
                          invalid={false}
                          key={position.id}
                          type="radio"
                          id={position.id}
                          name="positions_id"
                          label={position.name}
                        />
                      ))}
                  </div>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleCustomFileBrowser">File Browser</Label>
                  <CustomInput
                    onChange={handleInputPhoto}
                    invalid={false}
                    type="file"
                    id="photo"
                    name="photo"
                  />
                </FormGroup>
                <Button color="primary">submit</Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RegisterFromSection;
