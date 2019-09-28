import React from 'react'
import './Login.css';


const Home = () => (
  
    <div class="login-card">
    <h1>Log-in</h1>
  <form>
    <input type="text" name="user" placeholder="Username"></input>
    <input type="password" name="pass" placeholder="Password"></input>
    <input type="submit" name="login" class="login login-submit" value="login"></input>
  </form>

  <div class="login-help">
    <a href="#">Register</a> • <a href="#">Forgot Password</a>
  </div>
</div>
    


)

export default Home
