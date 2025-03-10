import { Edges, Html, Outlines, useGLTF } from '@react-three/drei';
// import { Perf } from "r3f-perf";
import { useEffect, useState } from 'react';
import { Material, Vector3 } from 'three';
import { MeshBasicMaterial } from 'three';

export function CabinetModel() {
  const [hovered, setHover] = useState('');
  const [seleceted, setSelected] = useState('');
  const { nodes, materials } = useGLTF('/Cabinet.glb');
  const altMat = new MeshBasicMaterial({ color: 'red' });
  const materialSelected = new MeshBasicMaterial({ color: 'green' });

  let keys = Object.keys(nodes);

  // Prepare a list for rearange position
  const listSteps = () => {
    const arr = [];
    keys.forEach((item) => {
      const tmp = item.substring(0, item.indexOf('-'));
      if (!arr.includes(tmp)) {
        arr.push(tmp);
      }
    });
    return arr.sort();
  };

  console.log('--list steps', listSteps());
  // Prepare a list for rearange position
  const testFirstPos = new Vector3(2, 2, 2);
  const copyFirst = Object.assign({}, testFirstPos);
  const testSecondPos = new Vector3(3, 3, 3);

  console.log(testFirstPos.multiply(testSecondPos));
  console.log(testFirstPos);
  console.log(copyFirst);

  useEffect(() => {
    /**
     * @todo remove menu generation an implement it in the main app
     */
    const elementList = document.querySelector('#element-list');
    const list = listSteps();
    list.forEach((item) => {
      const div = document.createElement('button');
      div.textContent = item;
      elementList.appendChild(div);
    });
    // Generate one material
    // console.log('the material name is ', materials['TrimMaterial']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * @todo Solution to go back to the original material after switch to hover,
   * @todo create a fallback material in case the node does not have one.
   * @todo Investigate what will happen if the model, has just one material, multiple materials or none
   *
   */
  return (
    <>
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
                  : key === seleceted
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
              /**
               *  @todo left mouse button should deselect, right mouse button should pan
               */
              onClick={(e) => {
                e.stopPropagation();
                setHover('');
                setSelected(key);
                console.log(nodes[key]);
              }}
              onPointerMissed={(e) => {
                e.stopPropagation();
                setHover('');
                setSelected('');
              }}
            >
              <Edges
                color={
                  key === hovered ? 'blue' : key === seleceted ? 'red' : 'black'
                }
                lineWidth={key === hovered ? 4 : key === seleceted ? 6 : 1}
              ></Edges>
            </mesh>
          );
        }
      })}
    </>
  );
}
