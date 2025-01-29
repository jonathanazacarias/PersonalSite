function Skill(props) {

    const {skill, skillExampleList} = props;

    const skillExampleString = skillExampleList.map((s) => ""+s+", ");

    return (
        <div className="skill">
            <h4 className="skillTitle">{skill}</h4>
            <p>{skillExampleString}</p>
        </div>
    )
}

export default Skill;