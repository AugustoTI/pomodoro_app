import { useState } from 'react';
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

  useInterval(() => {
    setMainTimer(mainTimer - 1);
  }, 1000);

  return (
    <>
      <div className="pomodoro">
        <h2>You are: Working</h2>
        <Timer mainTimer={mainTimer} />
        <div className="controls">
          <Button
            text="teste"
            className="pomodoro-btn"
            onClick={() => console.log('testando')}
          />
          <Button
            text="teste"
            className="pomodoro-btn"
            onClick={() => console.log('testando')}
          />
          <Button
            text="teste"
            className="pomodoro-btn"
            onClick={() => console.log('testando')}
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
