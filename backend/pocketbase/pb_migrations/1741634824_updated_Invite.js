/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 7,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Organisateur",
      "Equipes techniques",
      "Acteur",
      "Acteurs",
      "Réalisateurs",
      "Organisateurs"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4150093999")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Organisateur",
      "Equipes techniques",
      "Acteur",
      "Acteurs",
      "Réalisateurs",
      "Organisateurs"
    ]
  }))

  return app.save(collection)
})
