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
          "en-US": "Logo",
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: "logo.jpeg",
            upload: "./logo.png",
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
  // Wait for 5 seconds as this request might return before the asset processing is finished
  await new Promise((res) => setTimeout(res, 5000));
  // Publish an asset
  await makeRequest({
    method: "PUT",
    url: `/assets/${assetId}/published`,
    headers: {
      "X-Contentful-Version": assetVersion + 1,
    },
  });
};
