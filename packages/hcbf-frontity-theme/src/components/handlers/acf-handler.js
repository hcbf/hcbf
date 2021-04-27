const acfHandler = {
  name: "acf handler",
  priority: 10,
  pattern: "/acf/:id",
  func: async ({ link, params, state, libraries }) => {
    const { id } = params;

    // Fetch the new data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/pages/${id}`,
    });

    // Parse the JSON to get the object
    const fieldInfo = await response.json();

    // Add the items to source.data
    const fieldLink = state.source.data[link];

    Object.assign(fieldLink, {
      items: fieldInfo.acf,
    });
  },
};

export default acfHandler;
