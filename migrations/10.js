const ENTRY1_ID = "0eXAcCSeLEfvrSFqWBeUS";
// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  //TODO: GET CONTENTFUL VERSION FROM API
  const entry = await makeRequest({
    method: "GET",
    url: `/entries/${ENTRY1_ID}`,
  });
  console.log("ENTRY: ", entry);
};
