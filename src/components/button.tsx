interface Props {
  onClick: () => void;
  text: string;
}

export function Button(props: Props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}
