// React
import { useState } from "react";

// Styles
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [profilePicture, setProfilePicture] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "The form values are >>",
      email,
      password,
      displayName,
      profilePicture
    );
  };

  const handlePicture = (event) => {
    setError(null);
    const picture = event.target.files[0];

    if (picture === undefined) {
      setError("Please, select an image as profile picture");
      return;
    }

    if (!picture.type.includes("image")) {
      setError("Please, use an image for the profile picture");
      return;
    }

    if (picture.size > 100000) {
      setError(
        "Please, use a smaller picture for the profile ( Max. 100.000 Kb )"
      );
      return;
    }

    setProfilePicture(picture);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          required
          type="text"
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
      </label>
      <label>
        <span>Profile Photo:</span>
        <input
          required
          type="file"
          onChange={(event) => handlePicture(event)}
        />
        {error && <div className="error">{error}</div>}
      </label>

      <button className="btn">Sign Up</button>
    </form>
  );
};
export default Signup;
