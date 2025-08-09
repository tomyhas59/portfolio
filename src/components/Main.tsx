import DownButton from "./DownButton";
import { PropsType } from "../types/commonPropsType";
import TextType from "./TextType ";

const Main = ({ id, downButton }: PropsType) => {
  return (
    <section className="main" id={id}>
      <TextType
        text={[
          "Hello, This is YongHyeon's portfolio!!",
          "Thank you for visiting!!",
          "Enjoy your stay!",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Main;
