import * as THREE from 'three'
import React, { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0001: THREE.Mesh
  }
  materials: {
    'Material_0.001': THREE.MeshStandardMaterial
  }
}

//chatgpt mess

export default function Model(props: JSX.IntrinsicElements['group']) {
  // Fix the type assertion with a two-step approach
  const gltf = useGLTF('myHead//myHead.glb') as unknown;
  const { nodes, materials } = gltf as GLTFResult;
  
  // Add rotation functionality
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if(groupRef.current){
      groupRef.current.rotation.y += delta;
    }
  })
  
  return (
    <group ref={groupRef} {...props} dispose={null} scale={2.1} position={[0, -.9, 2]}>
      <mesh 
        geometry={nodes.Mesh_0001.geometry} 
        material={materials['Material_0.001']} 
        position={[0, -0.46, 0]} 
      />
    </group>
  )
}

useGLTF.preload('myHead/myHead.glb')