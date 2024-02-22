interface DownButtonProps {
  downButton: () => void;
}

const DownButton: React.FC<DownButtonProps> = ({ downButton }) => {
  return (
    <>
      <div className="downButton" onClick={downButton}></div>
    </>
  );
};

export default DownButton;
