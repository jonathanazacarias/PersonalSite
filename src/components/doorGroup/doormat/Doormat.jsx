import "./doormat.css";
import doormatBlank from "./doormat-blank.svg";
import MatButton from "./MatButton";
import doormatBlankResized from "./doormat-blank-resized.svg";

function Doormat(props) {
  const { button1, button2, button3, button4, handleBtnClick } = props;

  function buttonClick(doorID) {
    handleBtnClick(doorID);
  }

  return (
    <div className="matArea">
        <img className="mat" src={doormatBlankResized} />
        {button4? <MatButton id="matButton4" handleBtnClick={buttonClick} button={button4}/>:<></>}
        {button3? <MatButton id="matButton3" handleBtnClick={buttonClick} button={button3}/>:<></>}
        {button2? <MatButton id="matButton2" handleBtnClick={buttonClick} button={button2}/>:<></>}
        {button1? <MatButton id="matButton1" handleBtnClick={buttonClick} button={button1}/>:<></>}
    </div>
  );
}

export default Doormat;
