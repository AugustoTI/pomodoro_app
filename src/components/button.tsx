interface Props {
  onClick: () => void;
  text: string;
  className?: string;
}

export function Button(props: Props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
