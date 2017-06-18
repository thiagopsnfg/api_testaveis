describe('Route Books', () => {

  const Books = app.datasource.models.Books;

  const defaultBook = {
    id: 1,
    name: 'Default book'
  };

  beforeEach(done => {
    Books
      .destroy({
        where: {}
      })
      .then(() => Books.create(defaultBook))
      .then(() => {
        done();
      });
  });

  describe('Route GET /books', () => {

    it('should return a list of books', done => {

      request
        .get('/books')
        .end((err, res) => {

          expect(res.body[0].id).to.be.eql(defaultBook.id);
          expect(res.body[0].name).to.be.eql(defaultBook.name);

          done(err);
        });
    });
  });

  describe('Route GET /books/{id}', () => {

    it('should return a book by ID', done => {

      request
        .get('/books/1')
        .end((err, res) => {

          expect(res.body.id).to.be.eql(defaultBook.id);
          expect(res.body.name).to.be.eql(defaultBook.name);

          done(err);
        });
    });
  });

   describe('Route POST /books', () => {

    it('should Create a book', done => {

      const newBook = {
        id: 2,
        name: 'newBook'
      };

      request
        .post('/books')
        .send(newBook)
        .end((err, res) => {

          expect(res.body.id).to.be.eql(defaultBook.id);
          expect(res.body.name).to.be.eql(defaultBook.name);

          done(err);
        });
    });
  });

});