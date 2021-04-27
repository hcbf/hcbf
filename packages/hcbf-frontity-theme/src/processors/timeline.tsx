import { connect } from 'frontity';
import Timeline from '../components/Timeline/index';


const timeline = {
  name: 'timeline',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /timeline/.test(props.className),
  processor: ({ node }) => {
    let innerContainer = node.children[0].children;
    const heading = innerContainer.shift();
    let intro = [];

    while (innerContainer[0].props.className !== 'wp-block-group') {
      intro.push(innerContainer.shift());
    }

    const title = heading.children[0].content;
    const years = innerContainer;

    return {
      component: Timeline,
      props: { title, intro, years },
    }
  }
};

export default timeline;
