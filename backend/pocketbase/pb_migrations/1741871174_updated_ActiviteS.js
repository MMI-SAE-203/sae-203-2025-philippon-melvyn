/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update collection data
  unmarshal({
    "name": "Activites"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // update collection data
  unmarshal({
    "name": "ActiviteS"
  }, collection)

  return app.save(collection)
})
