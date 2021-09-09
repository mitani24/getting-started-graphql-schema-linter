const allRules = [
  "arguments-have-descriptions",
  "defined-types-are-used",
  "deprecations-have-a-reason",
  "descriptions-are-capitalized",
  "enum-values-all-caps",
  "enum-values-have-descriptions",
  "enum-values-sorted-alphabetically",
  "fields-are-camel-cased",
  "fields-have-descriptions",
  "input-object-fields-sorted-alphabetically",
  "input-object-values-are-camel-cased",
  "input-object-values-have-descriptions",
  "interface-fields-sorted-alphabetically",
  "relay-connection-types-spec",
  "relay-connection-arguments-spec",
  "relay-page-info-spec",
  "type-fields-sorted-alphabetically",
  "types-are-capitalized",
  "types-have-descriptions",
  "yukari-kawaii",
];

const excludes = [
  "arguments-have-descriptions",
  "enum-values-have-descriptions",
  "fields-have-descriptions",
  "input-object-values-have-descriptions",
  "types-have-descriptions",
];

const rules = allRules.filter((rule) =>
  excludes.every((exclude) => rule !== exclude)
);

module.exports = {
  schemaPaths: ["./**.graphql"],
  customRulePaths: ["./customRules/*.js"],
  rules,
  rulesOptions: {
    "type-fields-sorted-alphabetically": { sortOrder: "lexicographical" },
  },
};
