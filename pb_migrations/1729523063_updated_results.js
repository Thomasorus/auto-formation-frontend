/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xo0mar368ww3730")

  collection.name = "matches"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xo0mar368ww3730")

  collection.name = "results"

  return dao.saveCollection(collection)
})
