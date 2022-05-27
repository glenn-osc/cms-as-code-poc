const POST_TYPE = "post";
const UNIQUE_ENTRY_FIELD = "UniqueEntry";

// @ts-check
/** @type {import('contentful-migration').MigrationFunction} */
module.exports = async function (migration) {
  migration.transformEntries({
    contentType: POST_TYPE,
    from: [""],
    to: [UNIQUE_ENTRY_FIELD],
    transformEntryForLocale: function (fromFields, currentLocale) {
      const uuid = Math.random().toString();
      return { [UNIQUE_ENTRY_FIELD]: uuid };
    },
  });
};
