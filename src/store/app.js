import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  otherNotes: [
    {
      id: 1,
      title: 'fist note',
      description:
        'first note desccription should be long loremloremloremloremloremlorem loremloremloremloremloremlorem',
      backgroundColor: null,
    },
    {
      id: 2,
      title: 'fist note 2',
      description:
        'second note desccription should be long loremloremloremloremloremlorem loremloremloremloremloremlorem',
      backgroundColor: '#e599f7',
    },{
      id: 3,
      title: 'fist note 2',
      description:
        `Coconut- sabut 2
        Roli and moli - 2
        Chandan- 1 
        Madhu chota wala- 1
        Ghee- 1/2kg
        Jaw- 1 paw
        Teel- 100 g
        Arwa chawal sabut - 2.5kg
        Supadi - 100 g
        Rakt chandan- 1
        Panchmeva
        Namgrah lakdi
        Peela sarso - 100 g
        Teel ka tel - 1/2 kg
        Haldi - 100g
        Laal, peela, hara rang
        Lawa ka Kheer- 100 g
        Batasha- 100 g
        
        Paan ka patta - 10
        Phool mala- 50 ka rupee
        5 trah ka fruits
        5 trah ka mithai
        Kamaal gatta - 100 g
        
        Urad - 100g',
      backgroundColor: '#e599f7`,
    },
  ],
  pinnedNotes: [],
  archivedNotes: [],
  trashedNotes: [],
  seletedNote: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addOtherNotes(state, action) {
      state.otherNotes = [action.payload, ...state.otherNotes];
    },
    removeOtherNotes(state, action) {
      state.otherNotes = state.otherNotes.filter(
        (item) => item?.id !== action.payload
      );
    },
    setOtherSelected(state, action) {
      state.seletedNote = state.otherNotes.find(
        (item) => item?.id === action.payload
      );
    },
    addPinnedNotes(state, action) {
      state.pinnedNotes = [action.payload, ...state.pinnedNotes];
    },
    addArchivedNotes(state, action) {
      state.archivedNotes = [action.payload, ...state.archivedNotes];
    },
    addTrashedNotes(state, action) {
      state.trashedNotes = [action.payload, ...state.trashedNotes];
    },
  },
});

export const {
  addOtherNotes,
  addArchivedNotes,
  addPinnedNotes,
  addTrashedNotes,
  removeOtherNotes,
  setOtherSelected,
} = appSlice.actions;

export default appSlice.reducer;
