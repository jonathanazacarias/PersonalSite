import ReactMarkdown from "react-markdown";
import imgURLLoader from "./img-loader";
import { Container, Image } from "react-bootstrap";
import rehypeHighlight from "rehype-highlight";

function MarkdownRenderer(props) {
  const { markdown } = props;

  function handleSrc(src) {
    console.log(src)
    let newSrc = imgURLLoader(src);
    console.log(newSrc)
    return newSrc;
  }

  return (
    <ReactMarkdown
      children={markdown}
      components={{
        p: (props) => <p style={{ 'textIndent': '0' }} {...props} />,
        h2: (props) => <h2 {...props}></h2>,
        img: (props) => <Container style={{'display': 'flex', 'justifyContent':'center'}}><Image src={handleSrc(props.src)} alt={props.alt} style={{'width':'60%'}}/></Container>,
      }}
      rehypePlugins={[rehypeHighlight]}
    />
  );
}

export default MarkdownRenderer;
