import { connect } from 'frontity';
import FundingContainer from '../components/Home/FundingAnimation/index';

const animateFunding = {
  name: 'animate funding',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /current-funding/.test(props.className) && /home-container/.test(props.className),
  processor: ({ node }) => {

    const title = node.children[0].children[0].children[0].content;
    const innerColumns = node.children[0].children[1].children;


    return {
      component: FundingContainer,
      props: { title, innerColumns },
    }
  }
};

export default animateFunding;
