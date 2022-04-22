import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={15}
        longRestTime={20}
        cycles={4}
      />
    </div>
  );
}

export default App;
