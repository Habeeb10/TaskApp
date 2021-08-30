import axios from 'axios';

const baseUrl = 'https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news';

export const allNews = {
  state: {
    news: [],
    comments: [],
    images: [],
    loading: false,
  }, // initial state
  reducers: {
    SETLOADING: (state, payload) => {
      return {
        ...state,
        loading: payload,
      };
    },
    FETCH_NEWS: (state, payload) => {
      return {
        ...state,
        news: [...payload],
      };
    },
    SET_COMMENTS: (state, payload) => {
      return {
        ...state,
        comments: [...payload],
      };
    },
    GET_IMAGES: (state, payload) => {
      // const getImage = images.map(item => item.image);
      return {
        ...state,
        images: [...payload],
      };
    },
  },
  effects: () => ({
    loadData() {
      this.SETLOADING(true);
      axios({
        method: 'get',
        url: `${baseUrl}`,
        timeout: 2000,
      })
        .then(res => {
          this.FETCH_NEWS(res.data);
          this.SETLOADING(false);
        })
        .catch(err => {
          console.log(err);
          this.SETLOADING(false);
        });
    },
    comments(id) {
      this.SETLOADING(true);
      axios({
        method: 'GET',
        url: `${baseUrl}/${id}/comments`,
      })
        .then(res => {
          this.SET_COMMENTS(res.data);
          this.SETLOADING(false);
        })
        .catch(err => {
          console.log(err);
          this.SETLOADING(false);
        });
    },
    images(id) {
      this.SETLOADING(true);
      axios({
        method: 'GET',
        url: `${baseUrl}/${id}/images`,
      })
        .then(res => {
          this.GET_IMAGES(res.data);
          console.log(res, 'gghhh');

          // this.SETLOADING(false);
        })
        .catch(err => {
          console.log(err);
          this.SETLOADING(false);
        });
    },
  }),
};
