const Login = props =>
  <div className="auth-wrapper">
    <div className="auth-inner">
      <form className='register-form' onSubmit={props.submit}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id='email'
            value={props.values.email}
            onChange={props.handleEmailInputChange} />
          {props.submitted && !props.values.email && <span className="text-danger" id='first-name-error'>Please enter an email address</span>}
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
          {props.submitted && !props.values.password && <span className="text-danger" id='first-name-error'>Please enter a password</span>}
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label mt-2" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-2" >Submit</button>
        <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p>
      </form>
    </div>
  </div>

export default Login
