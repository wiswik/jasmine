describe("주식투자는", function() {
    it("대상이 주식이어야 한다", function(){ //Sepc title, exe Function()
        expect(investment.stock).toBe(stock);
    });
});