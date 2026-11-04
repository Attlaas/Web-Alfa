import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// GitHub Pages: 404.html redirige aquí con la ruta original en ?p=… para que funcionen los enlaces directos.
const params = new URLSearchParams(window.location.search);
const redirected = params.get('p');
if (redirected) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  window.history.replaceState(null, '', base + redirected + window.location.hash);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
