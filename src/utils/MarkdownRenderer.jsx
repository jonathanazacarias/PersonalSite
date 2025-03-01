import ReactMarkdown from "react-markdown";
import { Container, Image } from "react-bootstrap";
import rehypeHighlight from "rehype-highlight";

function MarkdownRenderer(props) {
  const { markdown } = props;

  return (
    <ReactMarkdown
      children={markdown}
      components={{
        p: (props) => <span style={{ 'textIndent': '0' }} {...props} />,
        h2: (props) => <h2 {...props}></h2>,
        img: (props) => <Container style={{'display': 'flex', 'justifyContent':'center'}}><img src={`/${props.src}`} alt={props.alt} style={{'width':'60%'}}/></Container>,
      }}
      rehypePlugins={[rehypeHighlight]}
    />
  );
}

export default MarkdownRenderer;
