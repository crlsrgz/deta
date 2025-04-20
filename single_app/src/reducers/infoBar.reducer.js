const initialState = { explodedModel: false };
/**
 * @param {*} state
 * @param {*} action
 * @returns
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPLODE-MODEL-STATE': {
      const changeExplodedModelState = {
        explodedModel: !state.explodedModel,
      };
      // console.log('infoBar-Explode-Reducer->', changeValue);
      return changeExplodedModelState;
    }

    default: {
      return state;
    }
  }
};

export const invertExplodedModelState = () => {
  return {
    type: 'EXPLODE-MODEL-STATE',
    // data: { exploded: true },
  };
};

export default reducer;
