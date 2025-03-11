import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function allFilms() {
    return await pb.collection("films").getFullList({
        sort: "date_projection"
    });
}

export async function allActivites() {
    return await pb.collection("activites").getFullList({
        sort: "date_projection"
    });
}

export async function allParticipants() {
    return await pb.collection("participants").getFullList({
        sort: "nom"
    });
}

export async function filmById(id) {
    return await pb.collection("films").getOne(id);
}

export async function activiteById(id) {
    return await pb.collection("activites").getOne(id);
}

export async function participantById(id) {
    return await pb.collection("participants").getOne(id);
}

export async function activitesByAnimateurId(id) {
    return await pb.collection("activites").getFullList({
        filter: `animateur_id = '${id}'`
    });
}

export async function activitesByAnimateurNom(nom) {
    const animateur = await pb.collection("participants").getFirstListItem(`nom = '${nom}'`);
    return await activitesByAnimateurId(animateur.id);
}

export async function addOrUpdateRecord(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}
