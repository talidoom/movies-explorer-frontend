class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this.currentToken = "";
  }

  getData(res) {
    if (!res.ok) {
      return Promise.reject(`Что-то пошло не так, ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.getData);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
