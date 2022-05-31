// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  //Create an asset
  const asset = await makeRequest({
    method: "POST",
    url: `/assets`,
    headers: {
      "Content-Type": "application/vnd.contentful.management.v1+json",
    },
    data: {
      fields: {
        title: {
          "en-US": "Corgi 2",
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: "corgi2.jpeg",
            upload:
              "https://images.unsplash.com/photo-1600077029182-92ac8906f9a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29yZ2l8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          },
        },
      },
    },
  });
  const assetId = asset.sys.id;
  const assetVersion = asset.sys.version;
  // Process an asset
  await makeRequest({
    method: "PUT",
    url: `/assets/${assetId}/files/en-US/process`,
    headers: {
      "X-Contentful-Version": assetVersion,
    },
  });
  // Publish an asset
  await makeRequest({
    method: "PUT",
    url: `/assets/${assetId}/published`,
    headers: {
      "X-Contentful-Version": assetVersion,
    },
  });
};
