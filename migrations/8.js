// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration, { makeRequest }) {
  // Upload an image
  const image = await makeRequest({
    method: "POST",
    baseURL: "https://upload.contentful.com",
    url: `/upload`,
    headers: {
      "Content-Type": "application/octet-stream",
    },
    data: {
      fields: {
        title: {
          "en-US": "logo",
        },
        description: {
          "en-US": "",
        },
        file: {
          "en-US": {
            contentType: "image/svg+xml",
            fileName: "logo.svg",
            file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>',
          },
        },
      },
    },
  });
};
