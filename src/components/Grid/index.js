import React from 'react';
import {getCoordinatesFromArrayIndex} from "../../utils/getCoordinatesFromArrayIndex";
import classNames from 'classnames';

export function Grid({className, width, height, figure}) {
  return (
    <div className={className}>
      {Array(width * height).fill(null).map((_, index) => {
        const [x, y] = getCoordinatesFromArrayIndex(index, width);

        let coord = null;
        if (figure != null) {
          coord = figure.find((coord) => coord[0] === x && coord[1] === y);
        }

        return (
          <div className={classNames("cell", coord ? "black" : null)} key={`${x}-${y}`} />
        );
      })}
    </div>
  );
}
