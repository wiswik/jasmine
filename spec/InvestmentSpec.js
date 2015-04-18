describe("주식투자는", function() { // jasmine global function

    var stock, investment;

    beforeEach(function(){
        stock = new Stock();
        investment = new Investment({
            stock: stock,
            shares:100,
            sharePrice:20,
            cost:2000
        });
    })


    it("대상이 주식이어야 한다", function(){ //Sepc title, exe Function()]
        // jasmine assertion . 테스트 타겟(인자1개).매처함수 - 체이닝콜방식으로 연결
        expect(investment.stock).toBe(stock);
    });

    it("매수 수량이 있어야 한다", function(){
        expect(investment.shares).toEqual(100);
    });

    it("매수 단가가 있어야 한다. ", function(){
        expect(investment.sharePrice).toEqual(20);
    });

    it("비용이 수반된다", function(){
        expect(investment.cost).toEqual(2000);
    });


    describe("주가가 상승하면 ", function() { // 같은행위가 중복될 때 중첩할 수 있다. 기능상차이가 없어 얼마든지 중첩 가능
        beforeEach(function(){
            stock.sharePrice=40;
        });

        it("투자 수익률은 양(+)의 값을 가진다", function(){
            expect(investment.roi()).toEqual(1);
        });

        it("우량 투자다", function(){
             expect(investment.isGood()).toBeTruthy();
            //expect(investment).toBeAGoodInvestment(); // TypeError :undefined is not a function...
        });

    }); // end 주가가 상승하면

    describe("주가가 하락하면 ", function() {
        beforeEach(function(){
            stock.sharePrice=0;
        });

        it("불량 투자다", function(){
             // expect(investment.not.isGood()).toBeTruthy();
        });

    }); // 주가가 하락하면



}); // end 주식투자는

