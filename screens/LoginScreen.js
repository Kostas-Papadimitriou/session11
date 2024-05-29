import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native-web";
import { AuthContext } from "../store/auth-contex";

function LoginScreen() {
  const [isAuthenticating, setiIsAuthenticating] = useState(second);
  const AuthCtx = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    setiIsAuthenticating(true);
    try {
      const token = await login(email, password);
      AuthCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failde",
        "Could not login!Please check your credentials!"
      );
    }

    setiIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Login you in......" />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
