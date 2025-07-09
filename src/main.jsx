import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    // ...your login logic here
    // on success:
    navigate("/dashboard");
  };

  return (
    // ...your login form JSX here
  );
};
