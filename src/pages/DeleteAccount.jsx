import React, { useState } from "react";
import Footer from "./footer";

function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://serversupermart.onrender.com/user_auth/delete_account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      
      const data = await response.json();
      
      console.log(response);
      
      if (response.ok) {
        setStatus("Successful. Please check your email to complete the procedure.");
        // setStatus("Success: " + data.message);
      } else {
        setStatus("Error: " + data.error);
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Delete Your Supermart Account?</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <br />
        <label style={styles.label}>Password:</label>
        <input
        //   type="tel"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
      <Footer />

    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: "150px",
    backgroundColor: "#fceee8",
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '16px',
  },
  label: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '250px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#e05615',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  status: {
    fontSize: '18px',
    marginTop: '16px',
  },
};


export default DeleteAccount;
