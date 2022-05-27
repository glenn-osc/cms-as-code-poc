import entries from "../constants/entry";
// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  await makeRequest({
    method: "PATCH",
    url: `/entries/${entries.entry1}`,
    data: [
      {
        op: "add",
        path: "/fields/title/en-US",
        value: "Hello, World!",
      },
    ],
  });
};
