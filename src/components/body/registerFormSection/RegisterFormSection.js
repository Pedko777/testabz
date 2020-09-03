import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmail } from 'validator';
import * as yup from 'yup';
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
  FormText,
} from 'reactstrap';

// const FILE_SIZE = 70 * 70;
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, 'Too Short name')
//     .max(60, 'Too Long name')
//     .required('A text is required'),
//   email: yup
//     .string()
//     .min(2, 'Too short email')
//     .max(100, 'Too Long email')
//     .email('invalid email')
//     .required('A email is required'),
//   phone: yup.string().required('A phone is required'),
//   position_id: yup.string().required('A position is required'),
//   photo: yup
//     .mixed()
//     .required('A photo is required')
//     .test(
//       'fileSize',
//       'File too large',
//       value => value && value.size <= FILE_SIZE,
//     )
//     .test(
//       'fileFormat',
//       'Unsupported Format',
//       value => value && SUPPORTED_FORMATS.includes(value.type),
//     ),
// });

const RegisterFromSection = () => {
  const data = new FormData();
  const [errors, setError] = useState({});

  const [name, setName] = useState('');
  const handleInputName = e => {
    e.preventDefault();
    setName(e.target.value);
    setError({ name: '' });
  };

  const [email, setEmail] = useState('');
  const handleInputEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
    setError({ email: '' });
  };

  const [phone, setPhone] = useState('');
  const handleInputPhone = e => {
    e.preventDefault();
    setPhone(e.target.value);
    setError({ phone: '' });
  };

  const [position_id, setPositionId] = useState('');
  const handleInputPositionId = e => {
    e.preventDefault();
    setPositionId(e.target.value);
    setError({ position_id: '' });
  };

  const [photo, setPhoto] = useState(undefined);
  const handleInputPhoto = e => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
    setError({ photo: '' });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.fetchToken());
  }, []);

  useEffect(() => {
    dispatch(usersOperations.fetchPositions());
  }, []);

  const validate = () => {
    let errors = {};

    if (name === '') errors = 'First Name can not be blank.';
    if (email === '') errors.email = 'Email can not be blank.';
    if (!isEmail(email)) errors.email = 'Email must be valid.';
    if (phone === '') errors.phone = 'Phone can not be blank.';
    if (position_id === '') errors.position_id = 'position_id must be valid.';
    if (photo === '') errors.photo = 'photo can not be blank.';

    return errors;
  };

  const positions = useSelector(state => state.positions);

  const handleSubmit = e => {
    const errors = validate();

    // data.append('name', name);
    // data.append('email', email);
    // data.append('phone', phone);
    // data.append('position_id', position_id);
    // data.append('photo', photo);
    e.preventDefault();
    console.log(errors);
    console.log('name', name);
    // if (Object.keys(errors).length === 0) {
    //   console.log(data);
    //   dispatch(usersOperations.postData(data));
    // } else {
    //   setError('');
    // }
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
                    invalid={errors.name ? true : false}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                  />
                  <FormFeedback>{errors.name && 'error'}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    onChange={handleInputEmail}
                    invalid={errors.email ? true : false}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                  />
                  <FormFeedback>{errors.email && 'error'}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    onChange={handleInputPhone}
                    invalid={errors.phone ? true : false}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your phone"
                  />
                  <FormText>Еnter phone number in open format</FormText>
                  <FormFeedback>{errors.email && 'error'}</FormFeedback>
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
                  {/* <FormText>error</FormText> */}
                </FormGroup>

                <FormGroup>
                  <Label for="exampleCustomFileBrowser">File Browser</Label>
                  <CustomInput
                    onChange={handleInputPhoto}
                    invalid={errors.photo ? true : false}
                    type="file"
                    id="photo"
                    name="photo"
                  />
                  <FormFeedback>{errors.photo && 'error'}</FormFeedback>
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
