const ENTRY1_ID = "6Kxhm0xtmHiu9E2yV2Foya";
// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  //Create an asset
  await makeRequest({
    method: "POST",
    url: `/assets`,
    headers: {
      "Content-Type": "application/vnd.contentful.management.v1+json",
    },
    data: {
      file: {
        "en-US": {
          contentType: "image/jpeg",
          fileName: "corgi.jpeg",
          upload:
            "https://images.unsplash.com/photo-1600077029182-92ac8906f9a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29yZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        },
      },
    },
  });
};
