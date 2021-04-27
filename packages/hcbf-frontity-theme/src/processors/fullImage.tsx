import FullImage from "../components/FullImage";

const fullImage = {
  name: 'full image',
  priority: 10,
  test: ({ component, props }) => component === "figure" && /size-full/.test(props.className),
  processor: ({ node }) => {
    const img = node;

    return {
      component: FullImage,
      props: { img },
    }
  }
};

export default fullImage;
