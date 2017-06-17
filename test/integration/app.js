describe('Route Books', () => {

    const defaultBook = {
        id : 1,
        name: 'Default book'
    };
  
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