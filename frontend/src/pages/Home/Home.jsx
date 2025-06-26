import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate('/login'); 
    } else {
      setAuth(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuth(false);
    console.log('Successfully logged out');
    navigate('/');
  };

  return (
    <div>
      {auth ? (
        <>
          
           
         
          <div className="container">
            <h2>Welcome to the Home Page!&#128515;</h2>
            <p>You have successfully logged in.</p>
            </div>
          <button className="log" onClick={handleLogout}>
              Logout
            </button>
        </>
      ) : (
        <div>
          <h3>Please Login</h3>
          <p>
            <Link to="/login">Go to Login</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;

