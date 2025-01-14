import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div>
      <p className="text2">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src="data:image/png;base64,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" alt="" />
      </div>
    </div>
  );
}
export default SignInwithGoogle;