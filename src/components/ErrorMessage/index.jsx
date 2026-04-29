import './ErrorMessage.css'

function ErrorMessage(props) {
  return <p className="error">{props.message}</p>
}

export default ErrorMessage