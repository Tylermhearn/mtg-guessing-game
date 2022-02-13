import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  let navigate = useNavigate()

  return (
    <button type="button" className="btn btn-secondary px-3 me-2" onClick={() => navigate('/login')}>
      Login
    </button>
  )
}

export default LoginButton
