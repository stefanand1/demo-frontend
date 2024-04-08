import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { globalTheme } from './util/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

// token : 21339e701307b7bf6984987b6352d5281805a89e8caeabcc5c1c4bf5effab49e9ba894b71f00330f4720f55687c2463132062bf8977b4d666090d5e641f5cd149665566a03cfd4dfbccb2ec4748487c0b1d5526029a6482ed4412ab9f5e4accb82c4ac55fc7daa5cada472ac4d832c203fd4795c8abef473b1f39764f02f0538