import React, { useEffect } from 'react'
import "../Home/Home.css"
const Home = () => {
    useEffect(() => {
        // Set a timeout for 2000 milliseconds (2 seconds)
        const timeoutId = setTimeout(() => {
          // After the timeout, navigate to a different page
          window.location.href ="/login";
        }, 2000);
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
      }, []); // Empty dependency array ensures the effect runs only once
    return (
        <div>
            <div className= "hhhh">
                <div class="welcome-container">
                    <h1>Welcome!</h1>
                    <p>Teachers</p>
                </div>
            </div>

        </div>
    )
}

export default Home;