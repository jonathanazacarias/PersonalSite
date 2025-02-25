import { Link } from "react-router-dom";
import "./doormat.css";

function MatButton(props) {
    const {handleBtnClick, button} = props;
    function buttonClick() {
        handleBtnClick(button.doorID);
    }

    return (
        <Link className="matLabel" onClick={buttonClick}><img className="matLabel"src={button.button} /></Link>
    )
}

export default MatButton;