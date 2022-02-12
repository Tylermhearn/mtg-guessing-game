import { useNavigate } from "react-router-dom";


const SignUpButton = () => {
  let navigate = useNavigate()

  return (
    <button type="button" className="btn btn-primary me-3" onClick={() => navigate('/sign-up')}>
      Sign up for free
    </button>
  )
}

export default SignUpButton
