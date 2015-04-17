beforeEach(function () {
  this.addMatchers({
    toBeAGoodInvestment: function() {
      var investment = this.actual;

      this.message = function(){
        return 'Expected investment to be a good investment'
      };

      return investment.isGood();
    };
  });
});

/*
beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
});
*/
