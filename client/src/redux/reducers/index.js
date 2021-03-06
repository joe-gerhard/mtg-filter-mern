const initialState = {
  sets: [],
  selectedSet: '',
  cards: [],
  pickOrders: [],
  publicPickOrders: [],
  selectedPickOrder: null,
  selectedCard: '',
  isCardPopoutOpen: false,
  user: {},
  loading: true,
  filter: {
    U: false,
    W: false,
    B: false,
    R: false,
    G: false,
    Colorless: false,
    common: false,
    uncommon: false,
    rare: false,
    mythic: false,
    text: ""
  }
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SETS_LOADED": 
      let sortedSets = filterAndSortSets(action.payload);
      let mostRecentSet = sortedSets[0].code;

      return {
        ...state,
        sets: sortedSets,
        selectedSet: mostRecentSet,
      }
    case "CARDS_LOADED":
      let cards = action.payload;
      cards.forEach((card, idx) => {
        card.tier = '1';
        card.pickOrder = idx + 1;
      })
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
      let filter = {...state.filter}
      filter[action.payload] = !filter[action.payload];

      return {
        ...state,
        filter,
      }
    case "SET_TEXT_FILTER":
      return {
        ...state,
        filter: {
          ...state.filter,
          text: action.payload,
        }
      }
    case "RESET_FILTER":
      return {
        ...state,
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
    case "OPEN_CARD_POPOUT": 
      return {
        ...state,
        isCardPopoutOpen: true,
        selectedCard: action.payload,
      }
    case "CLOSE_CARD_POPOUT":
      return {
        ...state,
        isCardPopoutOpen: false,
        selectedCard: '',
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
    case "SET_SELECTED_PICK_ORDER":
      return {
        ...state,
        selectedPickOrder: action.payload,
      }
    case "SET_PUBLIC_PICK_ORDERS":
      return {
        ...state,
        publicPickOrders: action.payload,
      }
    case "API_ERRORED":
      console.log(action.payload);
      return state;
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
