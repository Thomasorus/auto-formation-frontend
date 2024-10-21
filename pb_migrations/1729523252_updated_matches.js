/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xo0mar368ww3730")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "alr4vivw",
    "name": "game",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ahxu869jr7tta1p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xo0mar368ww3730")

  // remove
  collection.schema.removeField("alr4vivw")

  return dao.saveCollection(collection)
})
