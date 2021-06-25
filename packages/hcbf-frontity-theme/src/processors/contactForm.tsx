import { css } from "frontity";

const contactForm = {
  name: 'contact form',
  priority: 10,
  test: ({ component, props }) => component === "div" && /wp-block-contact-form-7-contact-form-selector/.test(props.className),
  processor: ({ node }) => {

    node.props.css = css`
      position: absolute;
      top: 125px;

      form {
        padding-left: calc(${224 / 1440} * 100vw);

        p {
          display: inline;
          width: ${100 / 3}%;
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
        }

        p#mission-statement, p#contact-content {
          display: flex;
          width: 100%;
        }

        p#mission-statement {
          font-size: calc(${36 / 1440} * 100vw);
          line-height: calc(${54 / 1440} * 100vw);
          width: calc(${1009 / 1440} * 100vw);
          margin-top: calc(${128 / 1440} * 100vw);
          align-items: center;
          color: #FFFFFF;
          text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        }

        p#contact-content {
          font-size: calc(${30 / 1440} * 100vw);
          line-height: calc(${45 / 1440} * 100vw);
          width: calc(${373 / 1440} * 100vw);
          margin-top: calc(${186 / 1440} * 100vw);
          color: #FFFFFF;
          text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
        }

        input {
          height: calc(${45 / 1440} * 100vw);
          min-height: 25px;
          margin-right: calc(${28 / 1440} * 100vw);
          border-radius: 5px;
          padding-left: 10px;
          font-size: calc(${20 / 1440} * 100vw);
          outline: none;
        }

        span.first-name input, span.last-name input {
          width: 230px;
        }

        span.your-email input{
          width: 320px;

          @media (max-width: 500px) {
            width: 230px;
          }
        }

        input.wpcf7-submit {
          background: #8EC442;
          color: #FFFFFF;
          width: calc(${129 / 1440} * 100vw);
          min-width: 70px;
          margin-right: 10px;
          border-radius: 20px;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          padding: 0;

          :hover {
            background: #7DAE39;
          }
        }
      }
    `

    return node;
  }
};

export default contactForm;