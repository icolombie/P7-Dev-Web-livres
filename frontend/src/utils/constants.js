const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  BOOKS: `${API_URL}/api/books`,
  BOOK: `${API_URL}/api/books/:id`,
  RATING: `${API_URL}/api/books/:id/auth/rating`,
  BEST_RATED: `${API_URL}/api/books/bestrating/:id`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  ADD_BOOK: '/Ajouter',
  BOOK: '/livre/:id',
  UPDATE_BOOK: 'livre/modifier/:id',
};
