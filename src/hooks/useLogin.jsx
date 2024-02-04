// React
import { useState } from "react";

// Firebase
import { projectAuthentication, projectFirestore } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "../hooks/useAuthenticationContext";

const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthenticationContext();

  const loginUser = async (email, password) => {
    try {
      setIsPending(true);
      setError(null);

      // Login the user
      const response = await projectAuthentication.signInWithEmailAndPassword(
        email,
        password
      );

      // Update user in the firestore collection
      await projectFirestore
        .collection("users")
        .doc(response.user.uid)
        .update({ online: true });

      dispatch({ type: "LOGIN_USER", payload: response.user });
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
      setError(error.message);
    }
  };

  return { loginUser, isPending, error };
};

export { useLogin };
