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

export async function FilmById(id) {
    return await pb.collection("Film").getOne(id);
}

export async function allActivites() {
    return await pb.collection("Activites").getFullList({
        sort: "Date_de_sortie"
    });
}

export async function ActivitéByAnimateurNom(nom) {
    const organisateur = await pb.collection("Activites").getFirstListItem(`nom = '${nom}'`);
    return await activitesByAnimateurId(organisateur.id);
}

export async function ActiviteById(id) {
    return await pb.collection("Activites").getOne(id);
}

export async function ActiviteByAnimateurId(id) {
    return await pb.collection("Activites").getFullList({
        filter: `animateur_id = '${id}'`
    });
}

export async function allActivites() {
    return await pb.collection("Activites").getFullList({
        sort: "date_activité"
    });
}

export async function ActivitesByTitre(titre) {
    return await pb.collection("Activites").getFirstListItem(`titre = '${titre}'`);
}

export async function ActivitesByLieu(lieu) {
    return await pb.collection("Activites").getFullList({
        filter: `lieu = '${lieu}'`
    });
}


export async function ActivitesAfficheSportiveById(id) {
    const activite = await pb.collection("Activites").getOne(id);
    return activite?.Affiche_sportive || null;
}

export async function ActivitesDetailsById(id) {
    const activite = await pb.collection("Activites").getOne(id);
    return {
        titre: activite?.titre,
        description: activite?.description,
        date_activité: activite?.date_activité,
        lieu: activite?.lieu
    };
}

export async function ActivitesByDateRange(startDate, endDate) {
    return await pb.collection("Activites").getFullList({
        filter: `date_activité >= '${startDate}' && date_activité <= '${endDate}'`
    });
}

export async function allInvite() {
    return await pb.collection("Invite").getFullList({
        sort: "nom"
    });
}

export async function inviteById(id) {
    return await pb.collection("Invite").getOne(id);
}

export async function allInvites() {
    return await pb.collection("Invite").getFullList({
        sort: "nom"
    });
}

export async function inviteById(id) {
    return await pb.collection("Invite").getOne(id);
}

export async function addOrUpdateInvite(id, data) {
    if (id) {
        return await pb.collection("Invite").update(id, data);
    } else {
        return await pb.collection("Invite").create(data);
    }
}

export async function associerActiviteInvite(inviteId, activiteId) {
    const data = {
        associe_activite: activiteId
    };
    return await pb.collection("Invite").update(inviteId, data);
}

export async function associerFilmInvite(inviteId, filmId) {
    const data = {
        associe_film: filmId
    };
    return await pb.collection("Invite").update(inviteId, data);
}

export async function addInvite({ nom, prenom, email, biographie, photo, role, associe_activite, associe_film }) {
    const data = {
        nom,
        prenom,
        email,
        biographie,
        photo,
        role,
        associe_activite,
        associe_film
    };
    return await pb.collection("Invite").create(data);
}

export async function getFilmsByInviteId(inviteId) {
    const invite = await pb.collection("Invite").getOne(inviteId);
    const films = invite?.associe_film;
    if (films) {
        return await pb.collection("Film").getFullList({
            filter: `id IN [${films.join(",")}]`
        });
    }
    return [];
}


export async function getActivitesByInviteId(inviteId) {
    const invite = await pb.collection("Invite").getOne(inviteId);
    const activites = invite?.associe_activite;
    if (activites) {
        return await pb.collection("Activites").getFullList({
            filter: `id IN [${activites.join(",")}]`
        });
    }
    return [];
}

export async function addOrUpdateRecord(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}

