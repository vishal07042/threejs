import { extend, useFrame, useThree,  } from "@react-three/fiber";
import React, { useRef } from "react";
import { MathUtils } from "three";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



extend({OrbitControls})

function Experience() {

  const {camera ,gl} = useThree();
  
  const cubeRef = useRef();
  const sphere = useRef();
  const group = useRef();
  const hel= useRef()
  useFrame((s, d) => {
    cubeRef.current.rotation.y += d;
    // cubeRef.current.position.x +=0.4;
    // cubeRef.current.position.x -=0.1;

    //sphere.current.scale.y+=0.1
   // group.current.rotation.y += 0.02;
  //  group.current.rotation.z += 0.02;
   // group.current.rotation.x -= 0.02;
  });
  return (
    <>
    <orbitControls args={[camera,gl.domElement]} />
    {/* <directionalLightHelper ref={hel} /> */}
    {/* {useHelper(hel,"red")} */}
    <directionalLight   />

    
      <group ref={group}>
        <mesh position={-1} rotateX={-Math.PI * 0.5} scale={14}>
          <planeGeometry />
          <meshBasicMaterial color="greenyellow" />
        </mesh>

        <mesh ref={sphere} scale={[1, 1, 1]} position={[-0.9, 0, 0]}>
          <sphereGeometry />
          < meshStandardMaterial color="orange" />
        </mesh>
        <mesh ref={cubeRef} scale={[1, 1, 1]} position={[1, 1, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </>
  );
}

export default Experience;
