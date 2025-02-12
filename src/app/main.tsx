import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from '../pages/main/App.tsx'
import {BrowserRouter} from "react-router-dom";


createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
)
