import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import ContactPage from './pages/ContactPage';
import Layout from './Layout2';
import NotFoundPage from './pages/NotFoundPage';
import { getCharacters, getCharactersById } from './api/characters-api';

// // Loader function for characters data
const charactersLoader = async () => {
  const characters = await getCharacters();
  return { characters };
};

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        loader : async () => {
          return { characters: await getCharacters() };
        },
        Component: CharactersPage,
        // loader: charactersLoader
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
        path: "/characters/:id",
        Component: CharacterDetailPage,
        loader: async ({ params }) => {
          const character = await getCharactersById(params.id);
          return { character };
        }
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