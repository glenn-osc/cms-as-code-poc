const ENTRY1_ID = "0eXAcCSeLEfvrSFqWBeUS";
// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  await makeRequest({
    method: "PATCH",
    url: `/entries/${ENTRY1_ID}`,
    headers: {
      "Content-Type": "application/json-patch+json",
    },
    data: [
      {
        op: "add",
        path: "/fields/title/en-US",
        value: "Hello, World!",
      },
    ],
  });
};
