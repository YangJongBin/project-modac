import { useCallback, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Canvas, useFrame } from 'react-three-fiber';

const Box = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} scale={[3, 3, 3]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  );
};

const World = () => {
  // TODO: dynamic postion
  const position = [0, 0, 0];

  return (
    <Canvas className="world">
      <pointLight position={[10, 10, 10]} />
      <Box position={position}></Box>
    </Canvas>
  );
};

export default World;
