import DataTable from "../components/DataTable/index";

const dataTable = {
  name: 'data table',
  priority: 10,
  test: ({ component, props }) => component === "p" && /grants-dt-content/.test(props.className),
  processor: ({ node }) => {

    return {
      component: DataTable,
      props: { node },
    }
  }
};

export default dataTable;
