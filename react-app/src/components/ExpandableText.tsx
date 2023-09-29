import { useState } from "react";

interface Props {
  children: string;
  chars?: number;
  onOpen?: () => void;
  onClose?: () => void;
}

const ExpandableText = ({ children, chars = 10, onOpen, onClose }: Props) => {
  const [showText, setShowText] = useState(false);

  const pText = children;

  const displayedText = pText.substring(0, chars);

  return (
    <>
      {showText === false ? (
        <>
          <p>
            {displayedText}
            {pText.length > chars ? "..." : ""}

            <button
              onClick={() => {
                setShowText(true);
                if (onOpen) onOpen();
              }}
            >
              Show More
            </button>
          </p>
        </>
      ) : (
        <>
          <p>{pText}</p>
          <button
            onClick={() => {
              setShowText(false);
              if (onClose) onClose();
            }}
          >
            Show Less
          </button>
        </>
      )}
    </>
  );
};

export default ExpandableText;
