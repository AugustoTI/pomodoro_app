import { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTimer, setMainTimer] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTimer(mainTimer - 1);
  }, 1000);

  return (
    <>
      <div className="pomodoro">
        <h2>You are: Working</h2>
        <Timer mainTimer={mainTimer} />
        <Button
          text="teste"
          className="pomodoro-btn"
          onClick={() => console.log('testando')}
        />
      </div>
    </>
  );
}
