/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kwugeagoibob564",
    "created": "2024-10-21 15:06:24.595Z",
    "updated": "2024-10-21 15:06:24.595Z",
    "name": "characters_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "evesfi12",
        "name": "character_name",
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
  const collection = dao.findCollectionByNameOrId("kwugeagoibob564");

  return dao.deleteCollection(collection);
})
