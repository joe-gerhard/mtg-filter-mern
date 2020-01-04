const initialState = {
  sets: [],
  selectedSet: '',
  cards: [],
  pickOrders: [],
  user: {},
  loading: true,
  filter: {
    Blue: false,
    White: false,
    Black: false,
    Red: false,
    Green: false,
    Colorless: false,
    Common: false,
    Uncommon: false,
    Rare: false,
    Mythic: false,
    text: ""
  }
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SETS_LOADED": 

      let sortedSets = filterAndSortSets(action.payload.sets);
      let mostRecentSet = sortedSets[0].code;

      return {
        ...state,
        sets: sortedSets,
        selectedSet: mostRecentSet,
      }
    case "CARDS_LOADED":
      return {
        ...state,
        cards: action.payload,
        loading: false,
      }
    case "SELECT_SET":
      return {
        ...state,
        selectedSet: action.payload,
      }
    case "SET_FILTER":
      let tempFilter = {...state.filter}
      tempFilter[action.payload] = !tempFilter[action.payload];
      return {
        ...state,
        filter: tempFilter,
      }
    case "SET_TEXT_FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: action.payload,
        }
      }
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      }
    case "BEGIN_LOADING":
      return {
        ...state,
        loading: true,
      }
    case "SET_PICK_ORDERS":
      return {
        ...state,
        pickOrders: action.payload,
      }
    default: return state;
  }
}

function filterAndSortSets(sets) {
  return sets.filter(set => set.type === "core" || set.type === "expansion")
  .sort((a, b) => {
    if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) > 0)
      return 1;
    if (a.releaseDate.slice(0, 4) - b.releaseDate.slice(0, 4) < 0)
      return -1;
    return a.releaseDate.slice(5, 7) - b.releaseDate.slice(5, 7);
  })
  .reverse()
}

export default rootReducer;
