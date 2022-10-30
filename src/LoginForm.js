import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
      <>
        <h3>Please log in</h3>
        <Link to="/">
          <button>Log in</button>
        </Link>
      </>
    )
  }