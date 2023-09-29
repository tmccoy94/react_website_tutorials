interface Props {
  text: string;
  color?: string; //? tells typescript the param is optional
  onClick: () => void;
}
function Button({ text, color = "primary", onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
