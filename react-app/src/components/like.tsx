import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

interface Props {
  color?: string;
  size?: number;
  onClick: () => void;
}

function LikeIcon({ color = "red", size = 15, onClick }: Props) {
  let [fill, setFill] = useState(false);

  const toggle = () => {
    setFill(!fill);
    onClick();
  };

  return (
    <div>
      {fill == false ? (
        <BsHeart color={color} onClick={toggle} size={size} />
      ) : (
        <BsFillHeartFill color={color} onClick={toggle} size={size} />
      )}
    </div>
  );
}

export default LikeIcon;
