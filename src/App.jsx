import React from 'react'
import { Canvas } from '@react-three/fiber'
 import './index.css'
function App() {
  return (
    <div>
      <Canvas >
  <mesh rotateX={2}>
    <torusKnotGeometry scale={4} />
    <meshNormalMaterial />
  </mesh>

  </Canvas>
    </div>
  )
}

export default App
