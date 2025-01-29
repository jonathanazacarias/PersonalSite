
function Education(props) {
    const {institution, location, date, summary} = props;
    return (
        <div className="edu">
            <h4 className="eduHeader">{institution}</h4>
            <p className="eduLocation">{location}</p>
            <p className="eduDate">{date}</p>
            <p className="eduSummary">{summary}</p>
        </div>
    )
}

export default Education;