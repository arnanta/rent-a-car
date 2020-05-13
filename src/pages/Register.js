
import React from 'react';
import RegisterForm from 'components/forms/RegisterForm';

class Register extends React.Component {

  registerUser = (registerData) => {
    alert(JSON.stringify(registerData));
  }

  render() {
    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Register</h1>
            <RegisterForm onSubmit={this.registerUser} />
            {/* <div className="alert alert-danger">
              <p>
                Some Error
              </p>
            </div> */}
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">Thank You for being a Part of the Journey You will Remember .</h2>
              <img src="https://i.pinimg.com/originals/95/37/28/953728c59e28e7e13550344d08f1b52a.jpg" alt="Register an user" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;