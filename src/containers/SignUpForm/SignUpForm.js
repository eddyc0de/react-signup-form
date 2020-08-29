import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './SignUpForm.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import VideoCover from '../../components/UI/VideoCover/VideoCover';
import AlertBox from '../../components/UI/AlertBox/AlertBox';
import SpinnerLoader  from '../../components/UI/SpinnerLoader/SpinnerLoader';
import * as authActions from '../../store/actions/auth';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        emailField: {
          type: 'email',
          placeholder: 'Email',
          alt: 'Your email',
          value: '',
          required: true,
        },
        passwordField: {
          type: 'password',
          placeholder: 'Password (6 characters or longer)',
          alt: 'Your password',
          value: '',
          required: true
        },
        passwordConfirmationField: {
          type: 'password',
          placeholder: 'Repeat Password',
          alt: 'Repeat the password',
          value: '',
          required: true
        }
      },
      formStatus: '', //success or fail
      minLengthPassword: 6,
      isPasswordMatchValid: false
    };
  }

  submitFormHandler = (e) => {
    e.preventDefault();
    //Check password validity
    if(this.state.formFields.passwordField.value === this.state.formFields.passwordConfirmationField.value 
      && this.state.formFields.passwordField.value.length >= 6 
      && this.state.formFields.passwordConfirmationField.value.length >= 6) {
      this.setState({ isPasswordMatchValid: true }, () => {
        this.signUpUser();
      });
    } else {
      this.setState({ isPasswordMatchValid: false });
    }
  }

  signUpUser = () => {
    const newUser = {
      email: this.state.formFields.emailField.value,
      password: this.state.formFields.passwordField.value,
      returnSecureToken: true
    };
    this.props.onSignUp(newUser); 
  }

  onChangeInputHandler = (e, key) => {
    const updatedField = {
      ...this.state.formFields[key],
      value: e.target.value
    };

    const updatedFormFields = {
      ...this.state.formFields,
      [key]: updatedField
    }
    this.setState({formFields: updatedFormFields});
  }

  render() {
    let form, alert;
    let arrayFields = [];

    //Adds a unique key
    for(let key in this.state.formFields) {
      arrayFields.push({
        id: key,
        data: this.state.formFields[key]
      });
    }

    //Checks for error messages from Firebase
    if (this.props.responseMessage === 'init') {
      alert = null;
    } else if (this.props.responseMessage === '') {
      alert = <AlertBox type="Success">REGISTERED SUCCESFULLY</AlertBox>;
    } else {
      alert = <AlertBox type="Error">{this.props.responseMessage}</AlertBox>;
    }

    form = (
      <React.Fragment>
        <VideoCover />
        <div className={styles.SignUpForm}>
          {alert}
          <h1>SIGN UP</h1>
          <form id={styles.signUpForm} onSubmit={this.submitFormHandler}>
            {
              arrayFields.map(field => (
                  <Input key={field.id} 
                    type={field.data.type} 
                    placeholder={field.data.placeholder} 
                    alt={field.data.alt} 
                    required={field.data.required}
                    changed={(e) => this.onChangeInputHandler(e, field.id)} />
              ))
            }
            <Button btnstyle='SingUp'>SIGN UP</Button>
            {this.props.isLoading ? <SpinnerLoader /> : null}
          </form>
        </div>
      </React.Fragment>
    );

    return form;
  }
}

const mapStateToProps = state => {
  return {
    responseMessage: state.auth.responseMessage,
    error: state.auth.error,
    isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (newUser) => { dispatch(authActions.auth(newUser)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
