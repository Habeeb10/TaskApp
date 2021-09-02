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
      this.SETLOADING(true);
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
      this.SETLOADING(false);
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
        .catch(err => err);
      this.SETLOADING(false);
    },

    addComment(data, id) {
      this.SETLOADING(true);
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
      this.SETLOADING(false);
    },

    editComment(data, id, commentId) {
      this.SETLOADING(true);
      axios({
        method: 'PUT',
        url: `${baseUrl}/${id}/comments/${commentId}`,
        headers,
        data,
      })
        .then(res => {
          this.comments();
        })
        .catch(err => err);
      this.SETLOADING(false);
    },
    deleteComment(data, id, deleteId) {
      this.SETLOADING(true);
      axios({
        method: 'DELETE',
        url: `${baseUrl}/${id}/comments/${deleteId}`,
        headers,
        data,
      })
        .then(res => {
          this.comments();
        })
        .catch(err => err);
      this.SETLOADING(false);
    },
  }),
};
