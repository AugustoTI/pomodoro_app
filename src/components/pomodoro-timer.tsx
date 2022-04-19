import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondToTime } from '../utils/second-to-time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTimer, setMainTimer] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTimer(mainTimer - 1);
  }, 2000);

  return (
    <>
      <h1>Isso é um Pomodoro: {secondToTime(mainTimer)}</h1>
    </>
  );
}
