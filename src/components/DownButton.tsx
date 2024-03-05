interface DownButtonProps {
  downButton: () => void;
}

const DownButton = ({ downButton }: DownButtonProps) => {
  return (
    <div>
      <div className="downButton" onClick={downButton}></div>
    </div>
  );
};

export default DownButton;
