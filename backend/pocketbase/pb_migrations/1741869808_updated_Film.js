/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date3590310586",
    "max": "2025-08-23 18:00:00.000Z",
    "min": "2025-08-18 10:00:00.000Z",
    "name": "Date_de_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date3590310586",
    "max": "2025-08-23 18:00:00.000Z",
    "min": "2025-08-18 10:00:00.000Z",
    "name": "Annee_de_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
