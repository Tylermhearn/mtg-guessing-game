import { useState } from "react"
import axios from "axios"

const useSignUp = () => {

  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const postUser = async (values) => {
    setLoading(true)
    await axios.post('http://127.0.0.1:8080/user/create', values)
      .then(res => res.json)
      .then(data => setResult(data))
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      })
    setLoading(false)
  }

  return { call: postUser, error, loading, result }
}

export default useSignUp
