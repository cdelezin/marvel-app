import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';
import { getCharacterById, getCharacters } from './api/characters-api';
import { Component } from 'react';
import CharacterDetailPage from './pages/CharacterDetailPage';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        // loader reads query params from the request URL and passes them to the API
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const rawSort = url.searchParams.get('sort') || 'name';
          const rawOrder = url.searchParams.get('order') || 'asc';

          // normalize order to either 'asc' or 'desc' (tolerate common variants/mistypes)
          const normalizeOrder = (o) => {
            if (!o) return 'asc';
            const s = String(o).toLowerCase();
            if (s.includes('desc') || s.startsWith('d')) return 'desc';
            // accept variants like 'ascending', 'asending', 'asc'
            return 'asc';
          };

          // normalize sort to known fields
          const normalizeSort = (s) => {
            if (!s) return 'name';
            const t = String(s).toLowerCase();
            if (t.includes('modified') || t.includes('mod') || t.includes('date')) return 'modified';
            return 'name';
          };

          const sort = normalizeSort(rawSort);
          const order = normalizeOrder(rawOrder);

          return { characters: await getCharacters({ sort, order }) };
        },
        Component: CharactersPage
      },
      {
          path: "/characters/:id",
          Component: CharacterDetailPage,
          loader: ({ params }) => {
            return getCharacterById(params.id);
          }
      },
      {
        // about page
        path: "/about",
        Component: AboutPage
      },
      {
        // contact page
        path: "/contact",
        Component: ContactPage
      },
      {
        // 404 page
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]

export default routes;