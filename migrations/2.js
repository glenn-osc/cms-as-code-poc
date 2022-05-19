const POST_TYPE = "post";
const ENTRY_ID_FIELD = "entryId";

// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration) {
  const postType = migration.editContentType(POST_TYPE);
  postType.createField(ENTRY_ID_FIELD, {
    name: "Entry ID",
    type: "Symbol",
    required: true,
  });
  postType.changeFieldControl(ENTRY_ID_FIELD, "builtin", "slugEditor", {
    trackingFieldId: "title",
  });
};
