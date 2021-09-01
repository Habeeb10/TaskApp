import axios from 'axios';

const baseUrl = 'https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news';

const headers = {
  key: 'Content-Type',
  name: 'Content-Type',
  value: 'application/json',
  type: 'text',
};

export const allNews = {
  state: {
    news: [],
    comments: [],
    images: [],
    currentNews: {},
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
      const data = payload.map(item => item.image);
      return {
        ...state,
        images: [...data],
      };
    },
    SET_NEWS: (state, payload) => {
      return {
        ...state,
        currentNews: payload,
      };
    },
  },
  effects: () => ({
    loadData() {
      this.SETLOADING(true);
      axios({
        method: 'get',
        url: `${baseUrl}`,
        timeout: 1000,
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
      }).then(res => {
        this.SET_COMMENTS(res.data);
        this.SETLOADING(false);
      });
    },
    getImages(id) {
      this.SETLOADING(true);
      axios({
        method: 'GET',
        url: `${baseUrl}/${id}/images`,
      }).then(res => {
        this.GET_IMAGES(res.data);
        this.SETLOADING(false);
      });
    },

    addNews(data) {
      axios({
        method: 'POST',
        url: `${baseUrl}`,
        headers,
        data,
      })
        .then(res => {
          this.loadData();
        })
        .catch(err => err);
    },

    getNewsById(id) {
      this.SETLOADING(true);
      axios({
        method: 'GET',
        url: `${baseUrl}/${id}`,
      })
        .then(res => {
          this.SET_NEWS(res.data);
        })
        .catch(err => err)
        .finally(() => this.SETLOADING(false));
    },

    addComment(data, id) {
      axios({
        method: 'POST',
        url: `${baseUrl}/${id}/comments`,
        headers,
        data,
      })
        .then(res => {
          this.comments();
        })
        .catch(err => err);
    },

    editComment(data, id) {
      axios({
        method: 'PUT',
        url: `${baseUrl}/${id}/comments/${id}`,
        headers,
        data,
      })
        .then(res => {
          console.log(res, 'jjjjjjkj');
          this.comments();
        })
        .catch(err => err);
    },
  }),
};
