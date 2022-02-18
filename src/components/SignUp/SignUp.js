const SignUp = props =>
  <div className="auth-wrapper">
    <div className="auth-inner">
      <form className='register-form' onSubmit={props.submit}>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            id='username'
            value={props.values.username}
            onChange={props.handleUsernameInputChange} />
          {props.submitted && !props.values.username && <span className="text-danger" id='username-error'>Please enter an username</span>}
        </div>
        <div className="form-group">
          <label className="mt-2">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id='email'
            value={props.values.emailAddress}
            onChange={props.handleEmailInputChange} />
          {props.submitted && !props.values.emailAddress && <span className="text-danger" id='email-address-error'>Please enter an email address</span>}
        </div>
        <div className="form-group">
          <label className="mt-2">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id='password'
            value={props.values.password}
            onChange={props.handlePasswordInputChange} />
          {props.submitted && !props.values.password && <span className="text-danger" id='password-error'>Please enter a password</span>}
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-2">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  </div >

export default SignUp
