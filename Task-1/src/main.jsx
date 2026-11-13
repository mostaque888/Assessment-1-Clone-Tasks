// 1. Import StrictMode from React
import { StrictMode } from 'react'

// 2. Import createRoot to connect React to the HTML page
import { createRoot } from 'react-dom/client'

// 3. Import global CSS styles
import './index.css'

// 4. Import the main App component
import App from './App.jsx'


// 5. Find the #root div in index.html and render the App inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
