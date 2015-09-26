;(function( should, expect, Ajax ) {
  'use strict';

<<<<<<< HEAD
  describe( '#AJAX - Test `get` method', function() {
=======
  describe( '#AJAX - Test `jsonp` method', function() {
>>>>>>> fda813ed0f8ba320ae08d195aec6af0257e536e9
    var ajax;
    beforeEach(function() {
      ajax = new Ajax();
    });

    it( 'Should return an object (users list)', function( done ) {
      ajax.jsonp( 'http://127.0.0.1:3000/api/users', function( response ) {
        response.should.be.an( 'object' );
        done();
      });
    });

    it( 'Should return data about `paulo`', function( done ) {
      ajax.jsonp( 'http://127.0.0.1:3000/api/user/paulo' )
      .done(function( response ) {
        response.name.should.be.equal( 'Paulo Torres' );
        done();
      });
    });

    it( 'Should return 404 error', function( done ) {
      ajax.jsonp( 'http://127.0.0.1:3000/api/something' )
      .error(function( response, xhr ) {
        xhr.status.should.be.equal( 404 );
        done();
      });
    });

    it( 'Should return 404 error on `always` promise', function( done ) {
      ajax.jsonp( 'http://127.0.0.1:3000/api/something' )
      .always(function( response, xhr ) {
        xhr.status.should.be.equal( 404 );
        done();
      });
    });

    it( 'Should return the same result on both promises `done` and `always`',
    function( done ) {
      function requestResponse( response, xhr ) {
        response.should.be.an( 'object' );
        done();
      }
      ajax.jsonp( 'http://127.0.0.1:3000/api/users' )
        .done( requestResponse )
        .always( requestResponse );
    });
  });
})( window.chai.should(), window.chai.expect, window.Ajax );
