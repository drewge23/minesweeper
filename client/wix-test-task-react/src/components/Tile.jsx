import React from 'react';
import s from '../styles/tile.module.css'
import {useTile} from "../hooks/useTile";
import * as PropTypes from "prop-types";

const Tile = (props) => {
    const {
        symbol,
        handleRightClick,
        handleClick
    } = useTile(props.symbol)

    return (
        <div className={s.tile}
             onContextMenu={(e) => handleRightClick(e)}
             onClick={handleClick}
        >
            <span className={s.symbol}>{symbol}</span>
        </div>
    );
}

Tile.propTypes = {
    symbol: PropTypes.string,
}

export default Tile;