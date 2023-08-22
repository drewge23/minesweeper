import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Tile from "../components/Tile";
import {getBoardMap, setIsInGame} from "../slices/gameSlice";
import {setUserName} from "../slices/userSlice";

const useBoard = (size) => {
    const [board, setBoard] = useState([])
    const dispatch = useDispatch()
    const boardMap = useSelector(state => state.game.boardMap)

    const generateBoard = (boardMap) => {
        let board = []
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                board.push(<Tile
                    key={`${i} ${j}`}
                    symbol={boardMap[i][j]}
                />)
            }
        }
        setBoard(board)
    }
    const handleStart = () => {
        setBoard([])
        dispatch(getBoardMap({}))
    }
    const handleLogout = () => {
        localStorage.removeItem('userName')
        dispatch(setUserName(''))
    }

    useEffect(() => {
        if (boardMap.length === 0) return
        generateBoard(boardMap)
        dispatch(setIsInGame(true))
    }, [boardMap])

    return {
        board,
        handleStart,
        handleLogout
    }
}

export {useBoard}