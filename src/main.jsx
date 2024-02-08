import React from 'react'
import ReactDOM from 'react-dom/client'


import { Canvas } from '@react-three/fiber'
import App from './App'
import './index.css'
import Experience from './assets/Experience'
import CustomObject from './CustomObject'
ReactDOM.createRoot(document.getElementById('root')).render(
 <>
  <Canvas >
  
  <Experience />
  <CustomObject  />

  </Canvas>
 </>
)
