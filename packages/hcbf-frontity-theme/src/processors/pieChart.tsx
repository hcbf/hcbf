import { connect } from 'frontity';
import PieChart from '../components/Financials/PieChart/index';

const pieChart = {
  name: 'pie chart',
  priority: 10,
  test: ({ component, props }) => component === 'figure' && /pie-chart/.test(props.className),
  processor: ({ node }) => {

    const table = node.children[0].children[0].children;
    let projects = [];
    let funding = [];
    let fillColors = [];

    table.map((item) => {
      projects.push(item.children[0].children[0].content);
      funding.push(item.children[1].children[0].content.substring(1));
      fillColors.push(item.children[2].children[0].content);
    });

    return {
      component: PieChart,
      props: { projects, funding, fillColors },
    }
  }
};

export default pieChart;
