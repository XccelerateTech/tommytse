describe("My second jasmine specification test", function() {
  it("should behave...I am the it block 1", () => {
    console.log("I am the it block 1");
  });
  it("should behave...I am the it block 2", () => {
    console.log("I am the it block 2");
  });
  it("should behave...I am the it block 3", () => {
    console.log("I am the it block 3");
  });
  it("should behave...I am the it block 4", () => {
    console.log("I am the it block 4");
  });
  it("should behave...I am the it block 5", () => {
    throw new Error("I am the it block 5 but I fail");
  });
});
