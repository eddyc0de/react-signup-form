import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import styles from './SignUpForm.module.css';
import VideoCover from '../../components/UI/VideoCover/VideoCover';
import AlertBox from '../../components/UI/AlertBox/AlertBox';
import axios from 'axios';

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

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[APIKEY]', newUser)
      .then(response => {
        console.log(response);
        this.setState({formStatus: 'SUCCESS'});
      })
      .catch(error => {
        if(error.response.data.error.message === 'EMAIL_EXISTS') {
          this.setState({formStatus: error.response.data.error.message});
        }
      });
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
    let arrayFields = [];
    for(let key in this.state.formFields) {
      arrayFields.push({
        id: key,
        data: this.state.formFields[key]
      });
    }

    let alert = null;
    if(this.state.formStatus === 'SUCCESS') {
      alert = <AlertBox type="Success">Registered Successfully</AlertBox>;
    } else if(this.state.formStatus === 'EMAIL_EXISTS') {
      alert = <AlertBox type="Error">The email already exists</AlertBox>;
    }

    let form = (
      <React.Fragment>
        <VideoCover />
        <div className={styles.SignUpForm}>
          <h1>Sign Up</h1>
          {alert}
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
          </form>
        </div>
      </React.Fragment>
    );

    return form;
  }
}

/* const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
}; */

//export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
export default SignUpForm;
