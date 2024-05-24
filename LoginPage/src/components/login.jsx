import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./signInWithGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "bottom-center",
      });
      window.location.href = "/profile";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <h3>Email address</h3>
        <input className="input1"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <h3>Password</h3>
        <input
          type="password" className="input1"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">
          Submit
        </button>
      </div>
      <p className="text1">
        New user <a href="/register">Register Here</a>
      </p>
      <SignInwithGoogle/>
    </form>
    </div>
  );
}

export default Login;