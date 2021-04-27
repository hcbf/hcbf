import MeetingMinutes from "../components/BoardMeetings/MeetingMinutes";

const meetingMinutes = {
  name: 'meeting minutes',
  priority: 10,
  test: ({ component, props }) => component === 'div' && /meeting-minutes/.test(props.className),
  processor: ({ node }) => {
    let minutes = node.children[0].children;
    const title = minutes.shift();

    return {
      component: MeetingMinutes,
      props: { title, minutes }
    }
  }
};

export default meetingMinutes;
