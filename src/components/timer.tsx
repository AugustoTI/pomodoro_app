import { secondToTime } from '../utils/second-to-time';

interface Props {
  mainTimer: number;
}

export function Timer(props: Props) {
  return <div className="timer">{secondToTime(props.mainTimer)}</div>;
}
