import { secondToMinutes } from '../utils/second-to-minutes';

interface Props {
  mainTimer: number;
}

export function Timer(props: Props) {
  return <div className="timer">{secondToMinutes(props.mainTimer)}</div>;
}
