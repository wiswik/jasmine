beforeEach(function() {
  this.addMatchers({
    toBeAGoodInvestment : function() {
      var Investment = this.actual;
      var what = this.isNot ? 'bad' : 'good';

      this.message = function(){
        return 'Expected investment to be a '+ what + 'investment'
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
