import MeetingDropdown from "../components/BoardMeetings/MeetingDropdown";

const meetingDropdown = {
  name: 'meeting dropdown',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /public-comment-dropdown/.test(props.className),
  processor: ({ node }) => {
    const button = node.children[0].children[0];
    const content = node.children[0].children[1];

    return {
      component: MeetingDropdown,
      props: { button, content },
    }
  }
};

export default meetingDropdown;
