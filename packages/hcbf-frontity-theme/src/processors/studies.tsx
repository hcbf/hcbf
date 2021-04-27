import Studies from '../components/Studies/index';

const studies = {
  name: 'studies',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /studies/.test(props.className),
  processor: ({ node }) => {


    const studies = node.children[0].children;
    let titles = [];
    let content = [];

    studies.map((item) => {
      titles.push(item.children[0].children[0]);
      content.push(item.children[0].children[1].children[0]);
    });

    return {
      component: Studies,
      props: { titles, content },
    }
  }
};

export default studies;
