import { FaArrowDown } from "react-icons/fa";

interface DownButtonProps {
  downButton: () => void;
}

const DownButton = ({ downButton }: DownButtonProps) => {
  return (
    <div>
      <FaArrowDown className="down-button" onClick={downButton} />
    </div>
  );
};

export default DownButton;
