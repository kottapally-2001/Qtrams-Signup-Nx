import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState<"signup" | "login">("signup");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (mode === "signup") {
      alert("Signup form submitted");
    } else {
      alert("Login form submitted");
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src="/images/Qtrams.jpg" alt="Qtrams Logo" />
          <h1>QTrams</h1>
        </div>
        <p className="sidebar-credit">Photo by Qtrams</p>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <div className="intro">
          <p>
            <b>
              Welcome! Let's get you started on something great. Just fill in
              your details and join the journey.
            </b>
          </p>
          <p>
            <strong>
              {mode === "signup"
                ? "Sign up now to get started."
                : "Log in to continue."}
            </strong>
          </p>
          <br />
          <p>
            <em>You know you want to.</em>
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <h3>{mode === "signup" ? "Let's do this!" : "Welcome back!"}</h3>

          {/* SIGNUP FIELDS */}
          {mode === "signup" && (
            <>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="first-name">First Name</label>
                  <input id="first-name" required />
                </div>

                <div className="input-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input id="last-name" required />
                </div>
              </div>
            </>
          )}

          {/* COMMON FIELDS */}
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            {mode === "signup" && (
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" required />
              </div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>

            {mode === "signup" && (
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" required />
              </div>
            )}
          </div>

          <button type="submit">
            {mode === "signup" ? "Create Account" : "Log In"}
          </button>
        </form>

        {/* TOGGLE LINK */}
        <p className="login">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("login");
                }}
              >
                Log in
              </a>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMode("signup");
                }}
              >
                Sign up
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
