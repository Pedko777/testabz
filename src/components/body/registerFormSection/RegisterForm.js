import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usersOperations from '../../../redux/users/usersOperations';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
// import { Form, Col, Row, Button } from 'react-bootstrap';

import styles from './RegisterForm.module.scss';

// const { Formik } = formik;

// const FILE_SIZE = 70 * 70;
// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
// const schema = yup.object({
//   name: yup.string().required('requred'),
//   email: yup.string().required('requred'),
//   phone: yup
//     .string()
//     .required('requred')
//     .matches(
//       /^\+?(\d{3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\[- .]?\d\d$/i,
//       'Cannot contain special characters or spaces',
//     ),
//   position_id: yup.string().required('requred'),
//   photo: yup.mixed().required('A file is required'),
//   // .test(
//   //   'fileSize',
//   //   'File too large',
//   //   value => value && value.size <= FILE_SIZE,
//   // )
//   // .test(
//   //   'fileFormat',
//   //   'Unsupported Format',
//   //   value => value && SUPPORTED_FORMATS.includes(value.type),
//   // ),
// });
const FILE_SIZE = 70 * 70;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg'];
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short name')
    .max(60, 'Too Long name')
    .required('A text is required'),
  email: yup
    .string()
    .min(2, 'Too short email')
    .max(100, 'Too Long email')
    .email('invalid email')
    .required('A email is required'),
  phone: yup.string().required('A phone is required'),
  position_id: yup.string().required('A position is required'),
  photo: yup
    .mixed()
    .required('A photo is required')
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= FILE_SIZE,
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.type),
    ),
});
const RegisterForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersOperations.fetchToken());
  }, []);
  useEffect(() => {
    dispatch(usersOperations.fetchPositions());
  }, []);

  const positions = useSelector(state => state.positions);

  return (
    <div className={`${styles.sectionWrapper} container`}>
      <div></div>
    </div>
  );
};

export default RegisterForm;
{
  /* <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            position_id: '',
            photo: undefined,
          }}
          validationSchema={schema}
          // onSubmit={() => console.log('!1')}

          // onSubmit={values => {
          //   // same shape as initial values
          //   console.log(values);
          // }}
        >
          {({
            // handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form
              as={Col}
              noValidate
              onSubmit={() => console.log('form submit')}
            >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationFormik02"> */
}
{
  /* <Form.Group as={Col} controlId="formGridEmail"> */
}
{
  /* <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                  /> */
}
{
  /* </Form.Group> */
}
{
  /* <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationFormik03">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="+380 XX XXX XX XX"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={touched.phone && !errors.phone}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row} controlId="validationFormik04">
                    <Form.Label as="legend" column sm={10}>
                      Select your position
                    </Form.Label>
                    <Col sm={10}>
                      {positions &&
                        positions.map(position => (
                          <Form.Check
                            key={position.name}
                            value={values.position_id}
                            // value={position.id}
                            onChange={handleChange}
                            type="radio"
                            label={position.name}
                            name="position_id"
                            id="formHorizontalRadios1"
                          />
                        ))}
                    </Col>
                  </Form.Group>
                </fieldset>

                <Form.Group as={Col} md="12" controlId="validationFormik05">
                  <Form.File
                    id="formcheck-api-custom"
                    name="photo"
                    onChange={handleChange}
                    value={values.photo}
                    custom
                    placeholder="Upload your photo"
                    isInvalid={!!errors.photo}
                  >
                    <Form.File.Input />
                    <Form.File.Label data-browse="Button text">
                      Custom file input
                    </Form.File.Label>
                    <Form.Control.Feedback type="valid">
                      You did it!
                    </Form.Control.Feedback>
                  </Form.File>

                  <Form.Control.Feedback type="invalid">
                    {errors.photo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik> */
}
