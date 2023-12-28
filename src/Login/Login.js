
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {

//     event.preventDefault();
//     if (username === 'admin' && password === 'admin') 
//     {
//       navigate('/Loginboard',{ state: { username }});

//     } else 
//     {
//       alert('Invalid');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       Username:<input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /><br></br><br></br>
//       Password:<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br></br><br></br>
//       <button type="submit"  >Login</button>
      
//     </form>
//   );
// };

// export default Login;

