const ENTRY1_ID = "6Kxhm0xtmHiu9E2yV2Foya";
// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  const entry = await makeRequest({
    method: "GET",
    url: `/entries/${ENTRY1_ID}`,
  });
  const entryVersion = entry.sys.version;
  // Update entry title
  await makeRequest({
    method: "PATCH",
    url: `/entries/${ENTRY1_ID}`,
    headers: {
      "Content-Type": "application/json-patch+json",
      "X-Contentful-Version": entryVersion,
    },
    data: [
      {
        op: "replace",
        path: "/fields/title/en-US",
        value: "Hello, World!",
      },
    ],
  });
  // Publish updated entry
  await makeRequest({
    method: "PUT",
    url: `/entries/${ENTRY1_ID}/published`,
    headers: {
      "Content-Type": "application/json-patch+json",
      "X-Contentful-Version": entryVersion + 1,
    },
  });
};
