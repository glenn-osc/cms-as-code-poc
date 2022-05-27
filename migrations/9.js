const ENTRY1_ID = "0eXAcCSeLEfvrSFqWBeUS";
// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  // Update entry title
  await makeRequest({
    method: "PATCH",
    url: `/entries/${ENTRY1_ID}`,
    headers: {
      "Content-Type": "application/json-patch+json",
      "X-Contentful-Version": 14,
    },
    data: [
      {
        op: "replace",
        path: "/fields/title/en-US",
        value: "Hello, Worlddddddddddddddd!",
      },
    ],
  });
  // Publish updated entry
  await makeRequest({
    method: "PUT",
    url: `/entries/${ENTRY1_ID}/published`,
    headers: {
      "Content-Type": "application/json-patch+json",
      "X-Contentful-Version": 15,
    },
  });
};
