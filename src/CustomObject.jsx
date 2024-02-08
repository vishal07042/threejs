import React from 'react'

function CustomObject() {

    const verticesCount = 10*3;
    const postions = new Float32Array(vertices * 3);
  return (
<>
    <mesh position={[-0.5,2,0]}>
        <boxGeometry />
        <meshStandardMaterial color="red"/>
    </mesh>
</>
  )
}

export default CustomObject
