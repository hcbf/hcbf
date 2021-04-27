import Financials from '../components/Financials/index';

const financials = {
  name: 'financials',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /financial-records/.test(props.className),
  processor: ({ node }) => {

    const records = node.children[0].children;

    return {
      component: Financials,
      props: { records },
    }
  }
};

export default financials;
