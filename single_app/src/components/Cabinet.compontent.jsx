import { OrbitControls, Environment, useAnimations } from '@react-three/drei';
import { Edges, Html, Outlines, useGLTF } from '@react-three/drei';
// import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from 'react';
import { Material, Vector2, Vector3 } from 'three';
import { MeshBasicMaterial, Raycaster } from 'three';

import modelURL from '../assets/models/Cabinet.glb?url';
import logInfo from '../utils/logger';
import { useControls } from 'leva';

/**
 *
 * Materials and Edge Colors
 */
const materialHovered = new MeshBasicMaterial({ color: '#0000ff' });
const materialSelected = new MeshBasicMaterial({ color: 'green' });

const edgeColorStandard = 'black';
const edgeColorHovered = 'olive';
const edgeColorSelected = 'dodgerblue';

export function CabinetModel(props) {
  const [hovered, setHover] = useState('');
  const [selected, setSelected] = useState('');
  const { nodes, materials, animations } = useGLTF(modelURL);
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  /**
   * Animations
   */
  useEffect(() => {
    console.log(actions);
    actions[animations[0].name].play();
    actions[animations[1].name].play();
  }, []);
  /**
   * Update the sting and send to parent component
   * @param {string} s
   */
  const handleStringUpdate = (s) => {
    const newString = s.trim();
    props.onStringUpdate(newString); // Pass the new string to the parent
    // logInfo('sent from child', newString);
  };

  /**
   * Selection
   */
  /**
   * @todo Solution to go back to the original material after switch to hover,
   * @todo create a fallback material in case the node does not have one.
   * @todo Investigate what will happen if the model, has just one material, multiple materials or none
   *
   */
  return (
    <>
      <color attach="background" args={['#091417']} />
      {/* <Perf></Perf> */}
      <Environment preset="city" resolution={256} />
      <ambientLight intensity={0.5} />
      <directionalLight position={(1, 1, 2)} />
      <OrbitControls />
      <axesHelper args={[3]} />
      {/* <Perf position="bottom-right" /> */}
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Cube000"
            castShadow
            receiveShadow
            geometry={nodes.Cube000.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={nodes.Cube000.geometry}
            material={materials.Material}
            position={[0, 0, -1.435]}
          />
        </group>
      </group>
    </>
  );
}
