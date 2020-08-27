const API_KEY = '51fd99d5677ddd16b1fe835873e08731';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais',
        title: 'Originais Netflix',
        items: await basicFetch(`/discover/tv?api_key=${API_KEY}`)
      },

      {
        slug: 'tranding',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
      },

      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
      },

      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
      },

      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
      },

      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
      },

      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
      }
    ]
  }
}