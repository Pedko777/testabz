import React, { Component } from 'react';
import {
  Form,
  CustomInput,
  FormText,
  Input,
  Label,
  FormGroup,
  FormFeedback,
} from 'reactstrap';
import validator from 'validator';

import { connect } from 'react-redux';
import usersOperations from '../../../redux/users/usersOperations';
import usersSelectors from '../../../redux/users/usersSelectors';
import { Modal } from 'react-bootstrap';
import styles from './registerFormSection.module.scss';
import Button from '../../buttons/Button';
class RegisterFormSection extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      name: '',
      email: '',
      phone: '',
      position_id: '',
      photo: '',
    },
    errors: {},
    isShowModal: false,
  });

  componentDidMount() {
    this.props.onFetchPositions();
    this.props.onFetchToken();
  }

  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      },
    });
  };

  handleChangePhoto = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.files[0],
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: '',
      },
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.name === '' || data.name.length > 60 || data.name.length < 2)
      errors.name = 'Error';

    if (!validator.isAlpha(data.name, ['en-US'])) errors.name = 'Error';
    if (!validator.isEmail(data.email)) errors.email = 'Error';
    if (data.email === '' || data.email.length > 100 || data.email.length < 2)
      errors.email = 'Error';
    if (data.phone === '') errors.phone = 'Error';
    if (!validator.isNumeric(data.phone, ['no_symbols: false ']))
      errors.phone = 'Error';
    if (data.position_id === '')
      errors.position_id = 'Position_id must be valid.';
    if (data.photo === '') errors.photo = 'Photo must be valid.';
    // if (!validator.isByteLength(data.photo, { min: 1, max: 3145728 }))
    //   errors.photo = 'Photo must be valid.';
    // if (!validator.matches(data.photo, /^([0-9A-z\ \_]+)$/, [modifiers]))
    //   errors.photo = 'Photo must be valid.';
    return errors;
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const FormDataFile = new FormData();
    const {
      data: { name, email, phone, position_id, photo },
    } = this.state;
    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      FormDataFile.append('name', name);
      FormDataFile.append('email', email);
      FormDataFile.append('phone', phone);
      FormDataFile.append('position_id', position_id);
      FormDataFile.append('photo', photo);
      this.props.setData(FormDataFile);
      this.setState(this.getInitialState());
      this.setState({ isShowModal: true });
    } else {
      this.setState({ errors });
      console.log(errors);
    }
  };

  render() {
    const { positions } = this.props;
    const { data, errors, isShowModal } = this.state;
    return (
      <div className={` ${styles.sectionWrapper}  container`}>
        <h2 className={styles.sectionTitle}>Register to get a work</h2>
        <p className={styles.sectionDescription}>
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>
        <div className={styles.formWrapper}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                value={data.name}
                invalid={errors.name ? true : false}
                name="name"
                placeholder="Your name"
                onChange={this.handleChange}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                value={data.email}
                invalid={errors.email ? true : false}
                name="email"
                onChange={this.handleChange}
                placeholder="Your email"
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone number</Label>
              <Input
                id="phone"
                value={data.phone}
                invalid={errors.phone ? true : false}
                name="phone"
                onChange={this.handleChange}
                placeholder="+380 XX XXX XX XX"
              />
              <FormText>Еnter phone number in open format</FormText>
              <FormFeedback>{errors.phone}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <legend>Select your position</legend>
              <Label for="position_id">Radios</Label>
              <div>
                {positions &&
                  positions.map(position => (
                    <CustomInput
                      onChange={this.handleChange}
                      value={position.id}
                      invalid={errors.position_id ? true : false}
                      key={position.id}
                      type="radio"
                      id={position.id}
                      name="position_id"
                      label={position.name}
                    />
                  ))}
              </div>
              <FormFeedback>{errors.position_id}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="photo">File Browser</Label>
              <CustomInput
                onChange={this.handleChangePhoto}
                invalid={errors.photo ? true : false}
                type="file"
                id="photo"
                name="photo"
              />
              <FormFeedback>{errors.photo}</FormFeedback>
            </FormGroup>
            <div className={styles.btnWrapper}>
              <Button type="submit" text="Sign up now" />
            </div>
            <Modal show={isShowModal} onHide={this.closeModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>Congratulations </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                You have successfully passed the registration
              </Modal.Body>
              <Modal.Footer>
                <Button text="Great" type="button" onClick={this.closeModal} />
              </Modal.Footer>
            </Modal>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    positions: usersSelectors.getPositons(state),
    token: usersSelectors.getToken(state),
  };
};

const mapDispatchToProps = dispatch => ({
  setData: data => dispatch(usersOperations.postData(data)),
  onFetchPositions: () => dispatch(usersOperations.fetchPositions()),
  onFetchToken: () => dispatch(usersOperations.fetchToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterFormSection);
