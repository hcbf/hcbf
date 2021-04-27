import { connect } from 'frontity';
import LatestPosts from '../components/Home/LatestPostsWidget/index';

const latestPosts = {
  name: 'latest posts',
  priority: 10,
  test: ({ node }) => node.component === "ul" && /wp-block-latest-posts/.test(node.props.className),
  processor: ({ node }) => {
    const postList = node.children;

    return {
      component: LatestPosts,
      props: { postList },
    }
  }
};

export default latestPosts;
