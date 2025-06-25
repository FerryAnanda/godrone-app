import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Login dengan email: ${email}`);
    // Tambahkan logika auth di sini
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, background: "#fff", borderRadius: 10 }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Kata Sandi"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleLogin} style={buttonStyle}>Login</button>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#27ae60",
  color: "white",
  border: "none",
  borderRadius: "6px",
  width: "100%",
};
