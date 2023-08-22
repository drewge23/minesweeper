import React from 'react';
import s from '../styles/board.module.css'
import {useSelector} from "react-redux";
import {useBoard} from "../hooks/useBoard";
import * as PropTypes from "prop-types";
import Tile from "./Tile";
import withErrorBoundary from "../hoc/withErrorBoundary";

const Board = ({size}) => {
    const userName = useSelector(state => state.user.name)
    const {
        board,
        handleStart,
        handleLogout
    } = useBoard(size)

    return (
        <>
            <h3>Hi, {userName}</h3>
            <div className={s.board}>
                {board}
            </div>
            <button onClick={() => handleStart(size)}> Start</button>
            <button onClick={handleLogout}> Log out</button>
        </>
    );
}

Tile.propTypes = {
    size: PropTypes.number,
}

export default withErrorBoundary(Board);