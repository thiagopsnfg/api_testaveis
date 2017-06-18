describe('Route Books', () => {

   const Books = app.datasource.models.Books;
   const defaultBook = {
        id : 1,
        name: 'Default book'
    };

    beforeEach(done =>{
      Books
      .destroy({where:{}})
      .then(() => Books.create(defaultBook))
      .then(() => {
        done();
      });
    });
  
  describe('Route GET /books', () => {

      it('shoulde return a list of books', done => {
          
        request
        .get('/books')
        .end((err, res) => {
          
          expect(res.body[0].id).to.be.eql(defaultBook.id);
          expect(res.body[0].name).to.be.eql(defaultBook.name);
          
          done(err);
        });
      });
  })
});