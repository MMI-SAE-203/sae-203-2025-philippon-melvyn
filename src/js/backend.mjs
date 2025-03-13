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

export const InviterService = {
    async getAll() {
        return await pb.collection("Invite").getFullList({ sort: "nom" });
    },


    async addOrUpdate(id, data) {
        return id
            ? await pb.collection("Invite").update(id, data)
            : await pb.collection("Invite").create(data);
    },

    async associateActivity(inviteId, activiteId) {
        return await pb.collection("Invite").update(inviteId, { associe_activite: activiteId });
    },

    async associateFilm(inviteId, filmId) {
        return await pb.collection("Invite").update(inviteId, { associe_film: filmId });
    },

    async add({ nom, prenom, email, biographie, photo, role, associe_activite, associe_film }) {
        return await pb.collection("Invite").create({ nom, prenom, email, biographie, photo, role, associe_activite, associe_film });
    },

};
export async function getFilms(inviteId) {
    try {
        const invite = await pb.collection("Invite").getOne(inviteId);
        const films = invite?.associe_film;
        if (films && films.length > 0) {
            return await pb.collection("Film").getFullList({
                filter: `id IN [${films.join(",")}]`,
            });
        } else {
            return [];
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des films :", error);
        throw new Error("Erreur lors de la récupération des films.");
    }
}
export async function getById(id) {
    try {
        const invite = await pb.collection("Invite").getOne(id);
        return invite;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'invité : ", error);
        throw new Error("L'invité n'a pas pu être récupéré.");
    }
}
export async function getActivities(inviteId) {
    try {
        const invite = await pb.collection("Invite").getOne(inviteId);
        const activites = invite?.associe_activite;

        if (activites && activites.length > 0) {
            return await pb.collection("Activites").getFullList({
                filter: `id IN [${activites.join(",")}]`,
            });
        } else {
            return [];
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des activités :", error);
        throw new Error("Erreur lors de la récupération des activités.");
    }
}

export async function addOrUpdateRecord(collection, id, data) {
    if (id) {
        return await pb.collection(collection).update(id, data);
    } else {
        return await pb.collection(collection).create(data);
    }
}
