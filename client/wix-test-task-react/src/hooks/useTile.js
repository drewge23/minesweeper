import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {incrementCounter, setIsInGame} from "../slices/gameSlice";

const useTile = (propsSymbol) => {
    const [symbol, setSymbol] = useState('')
    const dispatch = useDispatch()
    const isInGame = useSelector(state => state.game.isInGame)

    const handleRightClick = (e) => {
        e.preventDefault()
        if (!isInGame) return
        if (symbol === '') setSymbol('🚩')
        if (symbol === '🚩') setSymbol('')
    }
    const handleClick = () => {
        if (!isInGame) return
        if (symbol !== '') return
        if (propsSymbol === 'mine') {
            setSymbol('💣')
            dispatch(setIsInGame(false))
            alert('You lost!')
            return;
        }
        setSymbol(propsSymbol)
        dispatch(incrementCounter())
    }

    return {
        symbol,
        handleClick,
        handleRightClick
    }
}

export { useTile }