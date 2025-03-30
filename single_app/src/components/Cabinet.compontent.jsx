import { OrbitControls, Environment, useAnimations } from '@react-three/drei';
import { Edges, Html, Outlines, useGLTF } from '@react-three/drei';
// import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from 'react';
import { Material, Vector3 } from 'three';
import { MeshBasicMaterial } from 'three';

import model from '../assets/models/Cabinet.glb?url';
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
  const { nodes, materials, animations } = useGLTF(model);
  const groupRef = useRef();

  /**
   * Animations
   */
  logInfo('step one');
  const { actions, names } = useAnimations(animations, groupRef);
  logInfo('step two');
  // track loading state, because model/animations cannot be acceses if the load is not complete
  const [isLoading, setIsLoading] = useState(true);
  const [meshStates, setMeshStates] = useState({});
  const [availabelAnimations, setAvailableAnimations] = useState(new Set());

  useEffect(() => {
    if (!names || !actions) {
      console.warn('No animations found in the model');
      setIsLoading(false);
      return;
    }

    setAvailableAnimations(new Set(names));

    Object.keys(nodes).forEach((meshName) => {
      setMeshStates((prev) => ({
        ...prev,
        [meshName]: false,
      }));
    });
    setIsLoading(false);
  }, [nodes, actions, names]);

  // individual animation
  const handleMeshANimation = (meshName) => {
    // console.log(actions);

    if (!actions[meshName]) return;

    setMeshStates((prev) => ({
      ...prev,
      [meshName]: !prev[meshName],
    }));
    console.log(meshStates);
    if (meshStates[meshName]) {
      actions[meshName].stop();
      console.log('stop action');
    } else {
      actions[meshName].play();
      console.log('play action');
    }
  };

  useEffect(() => {
    logInfo('availabelAnimations', Array.from(availabelAnimations));
    logInfo('current animation states:', meshStates);
  });

  if (isLoading) {
    return null;
  }

  /**
   * Update the sting and send to parent component
   * @param {string} s
   */
  const handleStringUpdate = (s) => {
    const newString = s.trim();
    props.onStringUpdate(newString); // Pass the new string to the parent
    // logInfo('sent from child', newString);
  };

  let keys = Object.keys(nodes);

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
      <group ref={groupRef}>
        {keys.map((key) => {
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
                    ? materialHovered
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
                  handleMeshANimation('CubeAction');
                }}
                onPointerMissed={(e) => {
                  // console.log('event is', e);
                  if (e.type === 'click') {
                    e.stopPropagation();
                    setHover('');
                    setSelected('');
                    handleStringUpdate('');
                  }
                }}
              >
                <Edges
                  color={
                    key === hovered
                      ? edgeColorHovered
                      : key === selected
                        ? edgeColorSelected
                        : edgeColorStandard
                  }
                  lineWidth={key === hovered ? 4 : key === selected ? 6 : 1}
                ></Edges>
              </mesh>
            );
          }
        })}
      </group>
    </>
  );
}
