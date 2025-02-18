import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-bootstrap";

import MarkdownRenderer from "../../utils/MarkdownRenderer";

function HiddenTextDropdown(props) {
  const {title, content} = props;

  return (
    <Accordion>
      <AccordionItem eventKey="0">
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionBody>
          <MarkdownRenderer markdown={content} />
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
}

export default HiddenTextDropdown;