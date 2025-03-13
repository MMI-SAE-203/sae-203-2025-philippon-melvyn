/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file2366629291",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Affiche_sportive",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file2366629291",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Affiche",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
