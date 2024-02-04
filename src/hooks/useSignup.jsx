// React
import { useState } from "react";

// Firebase
import { projectAuthentication, projectStorage } from "../firebase/config";

// Hooks
import { useAuthenticationContext } from "./useAuthenticationContext";
import { upload } from "@testing-library/user-event/dist/upload";

const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthenticationContext();

  const signupUser = async (email, password, displayName, profilePicture) => {
    try {
      setError(null);
      setIsPending(true);

      console.log(
        "The form values are >>",
        email,
        password,
        displayName,
        profilePicture
      );

      // Create user
      let response = await projectAuthentication.createUserWithEmailAndPassword(
        email,
        password
      );

      // Upload picture to storage
      const uploadPath = `/thumbails/${response.user.uid}/${profilePicture.name}`;
      const img = await projectStorage.ref(uploadPath).put(profilePicture);
      const photoURL = await img.ref.getDownloadURL();

      // Update profile with the display name
      await response.user.updateProfile({ displayName, photoURL });

      dispatch({ type: "LOGIN_USER", payload: response.user });
      setIsPending(false);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signupUser, isPending, error };
};

export { useSignup };
