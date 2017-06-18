const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
  error: message,
}, statusCode);

class BooksController {

  constructor(Books) {
    this.Books = Books;
  }

  getAll() {
    return this.Books
      .findAll({})
      .then(result => defaultResponse(result))
      .catch(err => errorResponse(err.message));
  }

  findById(params) {
    return this.Books
      .findOne({
        where: params,
      })
      .then(result => defaultResponse(result))
      .catch(err => errorResponse(err.message));
  }

  create(data) {
    return this.Books
      .create(data)
      .then(result => defaultResponse(result, 201))
      .catch(err => errorResponse(err.message, 422));
  }

  update(data, params) {
    return this.Books
      .update(data, {
        where: params,
      })
      .then(result => defaultResponse(result))
      .catch(() => errorResponse(err.message, 412));
  }

  delete(params){
    return this.Books
        .destroy({ where: params })
        .then(() => defaultResponse({}, 204))
        .catch(() => errorResponse(err.message, 412));
  }
}

export default BooksController;
