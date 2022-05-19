// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration) {
  const entryID = migration.editContentType("post").createField("entryID", {
    name: "Entry ID",
    type: "Symbol",
    required: true,
  });
  migration
    .editContentType("Post")
    .changeFieldControl(entryID.id, "builtin", "slugEditor", {
      trackingFieldId: "title",
    });
};
