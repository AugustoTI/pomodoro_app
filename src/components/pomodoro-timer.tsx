import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTimer, setMainTimer] = useState(props.defaultPomodoroTime);

  // useInterval(() => {
  //   setMainTimer(mainTimer + 1);
  // }, 2000);

  return (
    <div>
      <h1>Isso é um Pomodoro: {mainTimer}</h1>
    </div>
  );
}
