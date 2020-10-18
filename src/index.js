import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init({
  locale: 'pt'
});
netlifyIdentity.setLocale('pt');
netlifyIdentity.on('logout', () => {
  console.log('Deslogando usuário')
  window.location.href = window.location.href
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
