const SignUp = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="form-group">
            <label className="mt-2">Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="form-group">
            <label className="mt-2">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label className="mt-2">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-2">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div >
  )
}

export default SignUp
