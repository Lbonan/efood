import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartslice.actions
export default cartslice.reducer
