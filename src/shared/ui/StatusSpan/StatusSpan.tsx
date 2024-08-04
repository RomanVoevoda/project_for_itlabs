import { FC } from "react";
import classes from './StatusSpan.module.scss';
import { StatusSpanProps } from "./types";

const StatusSpan: FC<StatusSpanProps> = ({type}) => {
  return (
    <span
    className={
      type === 'red'
      ?
      classes.span
      +
      ' '
      +
      classes.span_red
      :
      classes.span
      +
      ' '
      +
      classes.span_green
    }>
    </span>
  );
};

export default StatusSpan;