/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xo0mar368ww3730")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dfpiwprr",
    "name": "winner_character",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kwugeagoibob564",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lk94cmgj",
    "name": "loser_character",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kwugeagoibob564",
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
  collection.schema.removeField("dfpiwprr")

  // remove
  collection.schema.removeField("lk94cmgj")

  return dao.saveCollection(collection)
})
