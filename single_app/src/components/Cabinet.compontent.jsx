import { OrbitControls, Environment, useAnimations } from '@react-three/drei';
import { Edges, Html, Outlines, useGLTF } from '@react-three/drei';
// import { Perf } from "r3f-perf";
import { useEffect, useRef, useState } from 'react';
import { LoopOnce, Material, Vector3 } from 'three';
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
  const group = useRef();

  /**
   * Animations
   */
  // destructured inside an object
  const { actions } = useAnimations(animations, group);
  const animationName = animations.map((value) => value.name);

  // console.log('actions', actions);
  // console.log('actions names', actions.names);

  const { actionName } = useControls({
    actionName: { options: animationName },
  });

  console.log(animationName);
  useEffect(() => {
    // actions[animations[0].name].play();

    const runAction = actions[actionName];
    // const runAction = actions[actionName];

    // console.log('run action', runAction, actions, actionName);
    runAction.clampWhenFinished = true;
    runAction.setLoop(LoopOnce, 1);
    runAction.reset().fadeIn(0.5).play();

    //Cleanup in useEffect
    return () => {
      runAction.fadeOut(0.5);
      console.log('dispose');
    };
  }, [actionName]);

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
      <group ref={group} {...props} dispose={null}>
        <group name={'Scene'}>
          {/* <mesh
            name="Cube000"
            castShadow
            receiveShadow
            geometry={nodes.Cube000.geometry}
            material={materials.Material}
          /> */}
          {keys.map((key) => {
            if (key !== 'Scene') {
              return (
                <mesh
                  key={key}
                  //name is important to play the animation and keep ref
                  name={key}
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
      </group>
    </>
  );
}
