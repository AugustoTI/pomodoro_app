import { useEffect, useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTimer, setMainTimer] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(
    () => {
      setMainTimer(mainTimer - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTimer(props.pomodoroTime);
  };

  const configureRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);

    if (long) setMainTimer(props.longRestTime);
    else setMainTimer(props.shortRestTime);
  };

  return (
    <>
      <div className="pomodoro">
        <h2>You are: Working</h2>
        <Timer mainTimer={mainTimer} />
        <div className="controls">
          <Button text="Work" onClick={() => configureWork()} />
          <Button text="Rest" onClick={() => configureRest(false)} />
          <Button
            className={!working && !resting ? 'hidden' : ''}
            text={timeCounting ? 'Pause' : 'Play'}
            onClick={() => setTimeCounting(!timeCounting)}
          />
        </div>

        <div className="details">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
}
