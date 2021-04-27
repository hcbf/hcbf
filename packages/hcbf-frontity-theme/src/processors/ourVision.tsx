import { css } from "frontity";

const ourVision = {
  name: 'our vision',
  priority: 10,
  test: ({ component, props }) => component === "div" && /our-vision/.test(props.className),
  processor: ({ node }) => {

    node.props.css = css`
      position: relative;

      h2, p {
        position: absolute;
        color: #FFFFFF;
        z-index: 10;
      }

      h2 {
        top: 40px;
      }

      p {
        top: 86px;
      }
    `
    return node;
  }
};

export default ourVision;
