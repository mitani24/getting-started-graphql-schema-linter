const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(ruleName, message, nodes) {
    super(message, nodes);
    this.ruleName = ruleName;
  }
}

function YukariKawaii(context) {
  return {
    FieldDefinition: (v) => {
      if (v.name.value !== "yukari") {
        return;
      }

      context.reportError(
        new ValidationError(
          "yukari-kawaii",
          `${v.name.value} という名前は可愛すぎます！`,
          [v]
        )
      );
    },
  };
}

module.exports = { YukariKawaii };
