import React, { useState } from "react";
import axios from "axios";
import ThankYou from "./ThankYou"; // A component for a success message

const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = "http://localhost:8080/api/leads";

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error message before submitting the form

    // Simple email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Simulate network request and then set submitted state
      await axios.post(apiUrl, formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting the form:", err);
      setError("An error occurred while submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formStyles = {
    formContainer: {
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      background: "#f0f8ff",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "90%",
      maxWidth: "600px",
      background: "#ffffff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    input: {
      width: "90%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
    },
    button: {
      width: "95%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
    },
    error: {
      color: "red",
      textAlign: "center",
      background: "#ffe5e5",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    header: {
      textAlign: "center",
      color: "#0056b3",
    },
  };

  return (
    <div style={formStyles.formContainer}>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          style={formStyles.form}
        >
          <h2 style={formStyles.header}>Contact Us</h2>
          {error && (
            <p style={formStyles.error}>
              {error}
            </p>
          )}
          <label htmlFor="name" style={{ display: "block", marginBottom: "8px" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={formStyles.input}
          />
          <label htmlFor="email" style={{ display: "block", marginBottom: "8px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={formStyles.input}
          />
          <label htmlFor="phone" style={{ display: "block", marginBottom: "8px" }}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={formStyles.input}
          />
          <label htmlFor="message" style={{ display: "block", marginBottom: "8px" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              ...formStyles.input,
              minHeight: "100px",
            }}
          />
          <button
            type="submit"
            style={formStyles.button}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <ThankYou />
      )}
    </div>
  );
};

export default ContactFormPage;
