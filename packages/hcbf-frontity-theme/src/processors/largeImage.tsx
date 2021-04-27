import { css } from "frontity";

const largeImage = {
  name: 'large image',
  priority: 10,
  test: ({ component, props }) => component === "figure" && /size-large/.test(props.className),
  processor: ({ node }) => {

    node.props.css = css`
      img {
        width: calc(100% + 16vw + 30px);
        margin-left: calc(-8vw - 15px);
        margin-right: calc(-8vw - 15px);

        @media (max-width: 1140px) {
          width: 100vw;
        }
      }
    `
    return node;
  }
};

export default largeImage;
