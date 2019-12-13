const initialState = {
  sets: [],
  cards: [],
  test: "Redux is connected and working properly",
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SETS_LOADED": return {
      ...state,
      sets: action.payload.sets.filter(set => set.type === "core" || set.type === "expansion")
      .sort((a, b) => {
        if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) > 0)
          return 1;
        if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) < 0)
          return -1;
        return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7);
      })
      .reverse(),
    }
    default: return state;
  }
}

export default rootReducer;
