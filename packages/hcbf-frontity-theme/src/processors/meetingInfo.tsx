import MeetingInfo from "../components/BoardMeetings/MeetingInfo"

const meetingInfo = {
  name: 'meeting info',
  priority: 10,
  test: ({ component, props }) => component === 'p' && /meeting-info/.test(props.className),
  processor: ({ node }) => {

    return {
      component: MeetingInfo,
      props: {},
    }
  }
};

export default meetingInfo;
