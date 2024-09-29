import React, { useState } from 'react';
import './login.css'

function Login() {
  // pour switch de login et signIn
  const [isSignUp, setIsSignUp] = useState(false);

  // formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // switch
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  // mandefa formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    if (isSignUp) {
      //  l'inscription
      console.log('Sign-Up:', { email, password });
    } else {
      //  connexion
      console.log('Login:', { email, password });
    }
  };

  return (
    <div className='login__container'>
      <h2 className='login__title'>{isSignUp ? 'Créer un compte' : 'Connexion'}</h2>
      <form onSubmit={handleSubmit} className='login__form'>

        <div className='login__inputGroup'>
          <label>Email : </label> <br />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className='login__inputGroup'>
          <label>Mot de passe : </label> <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        {isSignUp && (
          <div className='login__inputGroup'>
            <label>Confirmez : </label> <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className='login__button'>
          {isSignUp ? "S'inscrire" : 'Se connecter'}
        </button>

      </form>

      <p className='login__toggletext'>
        {isSignUp
          ? 'Vous avez déjà un compte ?'
          : 'Pas encore de compte ?'}

        <button onClick={toggleAuthMode} className='login__toggleButton'>
          {isSignUp ? 'Se connecter' : "S'inscrire"}
        </button>

      </p>

    </div>
  );
}

export default Login;
