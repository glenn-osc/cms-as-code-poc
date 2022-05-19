const POST_TYPE = "post";
const DESCRIPTION_FIELD = "Description";

// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration) {
  const postType = migration.editContentType(POST_TYPE);
  postType.createField(DESCRIPTION_FIELD, {
    name: "Description",
    type: "Text",
    required: false,
  });
};
