import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { useContext } from "react";
import { AuthContext } from "../store/auth-contex";

function SignupScreen() {
  const [isAuthenticating, setiIsAuthenticating] = useState(second);
  const AuthCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setiIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      AuthCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authenication falied!",
        "Could not create yuser!Please check your input and try again later"
      );
    }

    setiIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
