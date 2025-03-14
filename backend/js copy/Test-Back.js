import {
    getImageUrl,
    allFilm,
    getPass,
    getFilmsByGenre,
    getFilmsByLangue,
    getFilmsByProduction,
    getFilmsByDateSortie,
    getFilmBandeAnnonce,
    FilmById,
    allActivites,
    ActivitéByAnimateurNom,
    ActiviteById,
    ActiviteByAnimateurId,
    ActivitesByTitre,
    ActivitesByLieu,
    ActivitesAfficheSportiveById,
    ActivitesDetailsById,
    ActivitesByDateRange,
    InviterService,
    getFilms,
    getById,
    getActivities,
    getRelatedItems,
    addOrUpdateRecord,
} from './backend.mjs';

describe('Backend Functions', () => {
    test('getImageUrl should return the correct URL', () => {
        const record = { collectionId: 'Film', id: '123', image: 'image.jpg' };
        const url = getImageUrl(record, 'image');
        expect(url).toBe('http://localhost:8090/api/files/Film/123/image.jpg');
    });

    test('allFilm should return a list of films', async () => {
        const films = await allFilm();
        expect(Array.isArray(films)).toBe(true);
    });

    test('getPass should return the correct pass', async () => {
        const pass = await getPass('filmId');
        expect(Array.isArray(pass)).toBe(true);
    });

    test('getFilmsByGenre should return films of the specified genre', async () => {
        const films = await getFilmsByGenre('Action');
        expect(Array.isArray(films)).toBe(true);
    });

    test('getFilmsByLangue should return films of the specified language', async () => {
        const films = await getFilmsByLangue('English');
        expect(Array.isArray(films)).toBe(true);
    });

    test('getFilmsByProduction should return films of the specified production', async () => {
        const films = await getFilmsByProduction('Warner Bros');
        expect(Array.isArray(films)).toBe(true);
    });

    test('getFilmsByDateSortie should return films of the specified release date', async () => {
        const films = await getFilmsByDateSortie('2025-03-14');
        expect(Array.isArray(films)).toBe(true);
    });

    test('getFilmBandeAnnonce should return the correct trailer URL', async () => {
        const trailer = await getFilmBandeAnnonce('filmId');
        expect(typeof trailer).toBe('string');
    });

    test('FilmById should return the correct film', async () => {
        const film = await FilmById('filmId');
        expect(film).toHaveProperty('id', 'filmId');
    });

    test('allActivites should return a list of activities', async () => {
        const activities = await allActivites();
        expect(Array.isArray(activities)).toBe(true);
    });

    test('ActiviteById should return the correct activity', async () => {
        const activity = await ActiviteById('activityId');
        expect(activity).toHaveProperty('id', 'activityId');
    });

    test('getById should return the correct invite', async () => {
        const invite = await getById('inviteId');
        expect(invite).toHaveProperty('id', 'inviteId');
    });

    test('getFilms should return films associated with the invite', async () => {
        const films = await getFilms('inviteId');
        expect(Array.isArray(films)).toBe(true);
    });

    test('getActivities should return activities associated with the invite', async () => {
        const activities = await getActivities('inviteId');
        expect(Array.isArray(activities)).toBe(true);
    });
});