/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7dj8qnbjr9q57xs",
    "created": "2024-10-21 15:02:22.662Z",
    "updated": "2024-10-21 15:02:22.662Z",
    "name": "session",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wvvmmhp7",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "rvab90sg",
        "name": "isOpen",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("7dj8qnbjr9q57xs");

  return dao.deleteCollection(collection);
})
