interface DownButtonProps {
  downButton: () => void;
}

const DownButton: React.FC<DownButtonProps> = ({ downButton }) => {
  return (
    <div>
      <div className="downButton" onClick={downButton}></div>
    </div>
  );
};

export default DownButton;
