import knex from "../lib/Knex.js";
import { Model } from "objection";

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["username", "email", "password"],
      properties: {
        id: { type: "integer" },
        username: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    return {
      images: {
        relation: Model.HasManyRelation,
        modelClass: Image,
        join: {
          from: "users.id",
          to: "images.user_id",
        },
      },
    };
  }
}

export default User;