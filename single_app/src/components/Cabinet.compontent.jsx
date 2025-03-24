import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Edges, Html, Outlines, useGLTF } from '@react-three/drei';
// import { Perf } from "r3f-perf";
import { useState } from 'react';
import { Material, Vector3 } from 'three';
import { MeshBasicMaterial } from 'three';

import model from '../assets/models/Cabinet.glb?url';

export function CabinetModel(props) {
  const [hovered, setHover] = useState('');
  const [selected, setSelected] = useState('');
  const { nodes, materials } = useGLTF(model);
  const altMat = new MeshBasicMaterial({ color: 'red' });
  const materialSelected = new MeshBasicMaterial({ color: 'green' });

  const handleStringUpdate = (s) => {
    const newString = s + '';
    props.onStringUpdate(newString); // Pass the new string to the parent
    console.log('sent from child', newString);
  };

  let keys = Object.keys(nodes);

  // Prepare a list for rearange position
  // const listSteps = () => {
  //   const arr = [];
  //   keys.forEach((item) => {
  //     const tmp = item.substring(0, item.indexOf('-'));
  //     if (!arr.includes(tmp)) {
  //       arr.push(tmp);
  //     }
  //   });
  //   return arr.sort();
  // };

  // console.log('--list steps', listSteps());

  // // Prepare a list for rearange position
  // const testFirstPos = new Vector3(2, 2, 2);
  // const copyFirst = Object.assign({}, testFirstPos);
  // const testSecondPos = new Vector3(3, 3, 3);

  // console.log(testFirstPos.multiply(testSecondPos));
  // console.log(testFirstPos);
  // console.log(copyFirst);

  /**
   * @todo Solution to go back to the original material after switch to hover,
   * @todo create a fallback material in case the node does not have one.
   * @todo Investigate what will happen if the model, has just one material, multiple materials or none
   *
   */
  return (
    <>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{
          position: props.canvasCameraPosition,
          near: 0.01,
          far: 100,
          fov: 45,
        }}
      >
        <color attach="background" args={['#091417']} />
        {/* <Perf></Perf> */}
        <Environment preset="city" resolution={256} />

        {/* <ambientLight intensity={0.5} />
            <directionalLight position={(1, 1, 2)} /> */}
        <OrbitControls />
        <axesHelper args={[3]} />
        {/* <Perf position="bottom-right" /> */}
        {keys.map((key) => {
          // saveMaterials.push([key, nodes])
          if (key !== 'Scene') {
            return (
              <mesh
                key={key}
                castShadow
                receiveShadow
                geometry={nodes[key].geometry}
                position={nodes[key].position}
                material={
                  key === hovered
                    ? altMat
                    : key === selected
                      ? materialSelected
                      : materials[nodes[key].material?.name ?? 'nothing']
                }
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHover(key);
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  setHover('');
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setHover('');
                  setSelected(key);
                  console.log('click event', nodes[key].name);
                  // console.log(materialNameSelected);
                  handleStringUpdate(nodes[key].name);
                }}
                onPointerMissed={(e) => {
                  // console.log('event is', e);
                  if (e.type === 'click') {
                    e.stopPropagation();
                    setHover('');
                    setSelected('');
                  }
                }}
              >
                <Edges
                  color={
                    key === hovered
                      ? 'blue'
                      : key === selected
                        ? 'red'
                        : 'black'
                  }
                  lineWidth={key === hovered ? 4 : key === selected ? 6 : 1}
                ></Edges>
              </mesh>
            );
          }
        })}
      </Canvas>
    </>
  );
}
