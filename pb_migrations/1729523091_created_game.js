/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ahxu869jr7tta1p",
    "created": "2024-10-21 15:04:51.033Z",
    "updated": "2024-10-21 15:04:51.033Z",
    "name": "game",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nld7qz7v",
        "name": "game_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ahxu869jr7tta1p");

  return dao.deleteCollection(collection);
})
