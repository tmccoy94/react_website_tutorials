interface Props {
  space: number;
}

function Spacer({ space }: Props) {
  return <span style={{ padding: `${space}px` }}></span>;
}

export default Spacer;
