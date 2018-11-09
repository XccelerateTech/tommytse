const Jedi = require("../starwars.js").Jedi;
const Sith = require("../starwars.js").Sith;
const duel = require("../starwars.js").duel;

describe("Testing starwars duel function", () => {
  var fakeObiwan;
  var fakeAnakin;

  beforeEach(() => {
    fakeObiwan = new Jedi("Obiwan Kenobi", 10, 100);
    fakeAnakin = new Sith("Anakin Skywalker", 10, 100);
    jasmine.clock().install();

    spyOn(fakeObiwan, "attack");
    spyOn(fakeAnakin, "attack");
    spyOn(fakeAnakin, "injure").and.callThrough();
    spyOn(fakeAnakin, "dead");
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  //part A
  it("track if functions in duel have been called", () => {
    //   spyOn(fakeObiwan, 'attack').and.callFake(() => {
    //        console.log("Obiwan pretended to attack Anakin.");
    // });
    // spyOn(fakeAnakin, 'attack').and.callFake(() => {
    //     console.log("Anakin pretended to attack Obiwan.");
    // });
    // spyOn(fakeAnakin, 'injure').and.callFake(() => {
    //     console.log("Anakin wasn't injured by the fake attacks.");
    // });
    // spyOn(fakeAnakin, 'dead').and.returnValue(false);

    // duel(fakeObiwan, fakeAnakin);

    // expect(fakeObiwan.attack).toHaveBeenCalled();
    // expect(fakeAnakin.attack).toHaveBeenCalled();
    duel(fakeObiwan, fakeAnakin);
    //expect(duel).toHaveBeenCalledWith(fakeObiwan, fakeAnakin); testing
    expect(fakeObiwan.attack).toHaveBeenCalledTimes(6);
    expect(fakeObiwan.attack).toHaveBeenCalledWith(fakeAnakin);
    expect(fakeAnakin.attack).toHaveBeenCalledTimes(6);
    expect(fakeAnakin.attack).toHaveBeenCalledWith(fakeObiwan);
  });

  it("should have the same outcome, Anakin becoming injured", () => {
    //spyOn(fakeAnakin, "injure").and.callThrough();
    duel(fakeObiwan, fakeAnakin);
    // fakeAnakin.injure(fakeAnakin.health - 10);
    fakeAnakin.dead();
    let oldHealth = fakeAnakin.health;
    // expect(fakeAnakin.injure).toHaveBeenCalledWith(fakeAnakin.health - 10);
    expect(fakeAnakin.injure).toHaveBeenCalled();
    expect(fakeAnakin.health).not.toEqual(oldHealth);
    expect(fakeAnakin.dead).toHaveBeenCalledTimes(2);
    expect(fakeAnakin.dead).toBeTruthy();
    //expect(fakeAnakin.health).toBe(90);
  });
  it("Anakin should be rescued by Darth Sidious after 5000 milliseconds", () => {
    duel(fakeObiwan, fakeAnakin);
    jasmine.clock().tick(5000);
    expect(fakeAnakin.health).toEqual(800);
    expect(fakeAnakin.power).toEqual(90);
  });
});
