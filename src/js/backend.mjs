import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


export default pb;
export function getImageUrl(record, field) {
    return `http://localhost:8090/api/files/${record.collectionId || 'Film'}/${record.id}/${record[field]}`;
}

export async function allFilm() {
    return await pb.collection("Film").getFullList({
        sort: "Date_de_sortie"
    });
}

export async function getPass(filmId) {
    return await pb.collection("Film").getFullList({
        filter: `id = '${filmId}'`
    });
}

export async function getFilmsByGenre(genre) {
    return await pb.collection("Film").getFullList({
        filter: `Genre = '${genre}'`
    });
}

export async function getFilmsByLangue(langue) {
    return await pb.collection("Film").getFullList({
        filter: `Langue = '${langue}'`
    });
}

export async function getFilmsByProduction(production) {
    return await pb.collection("Film").getFullList({
        filter: `Production = '${production}'`
    });
}

export async function getFilmsByDateSortie(date) {
    return await pb.collection("Film").getFullList({
        filter: `Date_de_sortie = '${date}'`
    });
}

export async function getFilmBandeAnnonce(filmId) {
    const film = await pb.collection("Film").getOne(filmId);
    return film.Bande_annonce;
}

export async function allActivites() {
    return await pb.collection("Activité").getFullList({
        sort: "Date_de_sortie"
    });
}

export async function allInvite() {
    return await pb.collection("Invite").getFullList({
        sort: "nom"
    });
}

export async function FilmById(id) {
    return await pb.collection("Film").getOne(id);
}

export async function ActiviteById(id) {
    return await pb.collection("Activité").getOne(id);
}

export async function inviteById(id) {
    return await pb.collection("Invite").getOne(id);
}

export async function ActiviteByAnimateurId(id) {
    return await pb.collection("Activite").getFullList({
        filter: `animateur_id = '${id}'`
    });
}

export async function ActivitéByAnimateurNom(nom) {
    const organisateur = await pb.collection("Activité").getFirstListItem(`nom = '${nom}'`);
    return await activitesByAnimateurId(organisateur.id);
}

export async function addOrUpdateRecord(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}

