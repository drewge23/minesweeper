import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        isInGame: false,
        boardMap: [],
        counter: 0,
    },
    reducers: {
        setIsInGame: (state, action) => {
            state.isInGame = action.payload
            state.counter = 0
            return state
        },
        setBoardMap: (state, action) => {
            state.boardMap = action.payload
            return state
        },
        incrementCounter: (state, action) => {
            state.counter = state.counter + 1
            if (state.counter === 90) {
                alert('You won!')
                state.isInGame = false
            }
            return state
        },
        resetCounter: (state, action) => {
            state.counter = 0
            return state
        }
    }
})

export const getBoardMap = createAsyncThunk('game/getBoardMap', ({}, {dispatch}) => {
    fetch('http://localhost:4000/api/newgame', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        return response.json()
    }).then(json => {
        console.log(json.data)
        dispatch(setBoardMap(json.data))
    }).catch((err) => {
        alert(err.message)
    })
})

export const {setIsInGame, setBoardMap, incrementCounter, resetCounter} = gameSlice.actions
export default gameSlice.reducer