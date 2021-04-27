import BioContainer from '../components/TeamBios/index';

const teamBios = {
  name: 'team bios',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /bio-container/.test(props.className),
  processor: ({ node }) => {
    const teamMembers = node.children;
    const lastRow = node.parent.children[node.parent.children.length - 1] === node && !/legal/.test(node.parent.parent.props.className);

    return {
      component: BioContainer,
      props: { teamMembers, lastRow },
    }
  }
};

export default teamBios;
