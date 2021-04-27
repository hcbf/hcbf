import Carousel from '../components/Home/Carousel/index';

const carousel = {
  name: 'carousel',
  priority: 10,
  test: ({ node }) => node.component === "figure" && /wp-block-gallery/.test(node.props.className),
  processor: ({ node }) => {
    return {
      component: Carousel,
      props: {
        title: node.children[1].children[0].content,
        galleryItems: node.children[0].children,
      },
    }
  }
};

export default carousel;
