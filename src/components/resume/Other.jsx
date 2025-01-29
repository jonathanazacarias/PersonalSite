function Other(props) {

    const {title, list} = props;

    const listString = list.map((l) => ""+l+", ");

    return (
        <div className="other">
            <h4 className="otherTitle">{title}</h4>
            <p>{listString}</p>
        </div>
    )
}

export default Other;