import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import voicebotImage from "../assests/voicebot.png";

export default function LoginSignup() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Sign Up Success");
    } else {
      if (
        (formData.email === "admin@radicalminds.co" ||
          formData.email === "agent@radicalminds.co") &&
        formData.password === "test@123"
      ) {
        console.log("Login success!");
      } else {
        console.log("Invalid credentials");
      }
    }
  };

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="page">
      <div className="container">
        {/* Left Side - Image */}
        <div className="image-section">
          <div className="image-wrapper">
            <img src={voicebotImage} alt="Modern workspace" className="image" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="form-section">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-header">
              <h1>
                {isSignUp
                  ? "Create Your Voice Bot AI Account"
                  : "Sign In to Voice Bot AI"}
              </h1>
              <p>
                {isSignUp
                  ? "Unlock the power of Agentic AI and start building intelligent voice agents today."
                  : "Access your Voice Bot AI dashboard and continue leading the future of conversations."}
              </p>
            </div>

            {isSignUp && (
              <div className="field">
                <label>Full Name</label>
                <div className="input-wrapper">
                  <User className="icon" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div className="field">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail className="icon" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock className="icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-btn"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="field">
                <label>Confirm Password</label>
                <div className="input-wrapper">
                  <Lock className="icon" size={20} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="toggle-btn"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {!isSignUp && (
              <div className="forgot">
                <button type="button">Forgot your password?</button>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isSignUp ? "Create Account" : "Sign In"}
              <ArrowRight className="ml-2" size={20} />
            </button>

            <div className="divider">
              <span>Or continue with</span>
            </div>

            <div className="switch-mode">
              <p>
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button type="button" onClick={toggleMode}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .page {
          display: flex;
          align-items: stretch;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background: #f3f4f6;
          overflow: hidden;
          font-family: "Inter", sans-serif; /* ✅ Apply clean modern font */
        }

        .container {
          display: flex;
          width: 100%;
          height: 100%;
          border-radius: 0;
          box-shadow: none;
          background: white;
        }

        /* Image takes 70% */
        .image-section {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70%;
        }
        .image-wrapper {
          width: 70%;
          height: 80%;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }

        /* Form takes 30% */
        .form-section {
          width: 30%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          background: #fff;
          //   box-shadow: -4px 0 12px rgba(0, 0, 0, 0.05);
        }

        .form {
          width: 100%;
          max-width: 360px;
        }

        .form-header h1 {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #111827;
          text-align: left;
        }
        .form-header p {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .field {
          margin-bottom: 1.25rem;
        }
        .field label {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
          color: #374151;
          display: block;
        }
        .input-wrapper {
          position: relative;
        }
        .input-wrapper input {
          width: 78%;
          padding: 0.75rem 2.5rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          outline: none;
        }
        .input-wrapper input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px #6366f1;
        }
        .icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        .toggle-btn {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          background: none;
          border: none;
          cursor: pointer;
        }

        .forgot {
          text-align: right;
          margin-bottom: 1rem;
        }
        .forgot button {
          font-size: 0.875rem;
          color: #1e3a8a;
          border: none;
          background: none;
          cursor: pointer;
        }

        .submit-btn {
          width: 100%;
          color: white;
          padding: 0.85rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .submit-btn:hover {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
        }

        .divider {
          position: relative;
          margin: 1.5rem 0;
          text-align: center;
          border-top: 1px solid #d1d5db;
        }
        .divider span {
          background: white;
          padding: 0 0.75rem;
          font-size: 0.875rem;
          color: #6b7280;
          position: relative;
          top: -0.7rem;
        }

        .switch-mode {
          text-align: center;
        }
        .switch-mode p {
          font-size: 0.9rem;
          color: #6b7280;
        }
        .switch-mode button {
          margin-left: 0.5rem;
          font-size: 0.9rem;
          color: #1e3a8a;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
