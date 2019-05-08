const initialState = {
  cereals: ["Lucky Charms", "Captain Crunch", "Panda Puffs"]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const getCereals = state => state.cereals;
