import knex from "../lib/Knex.js";
import { Model } from "objection";

Model.knex(knex);

class Image extends Model {
  static get tableName() {
    return "images";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["url", "user_id"],
      properties: {
        id: { type: "integer" },
        url: { type: "string", minLength: 1 },
        description: { type: "string" },
        image_date: { type: "string", format: "date" },
        user_id: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    const User = require("./User.js").default;
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "images.user_id",
          to: "users.id",
        },
      },
    };
  }
}

export default Image;
