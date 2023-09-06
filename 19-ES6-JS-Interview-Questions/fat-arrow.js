let javascript = {
  Name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    // this.libraries.forEach((value, index, arr) => {
    //   console.log(`${this.Name} loves ${value}!`);
    // });
    this.libraries.forEach(function (a) {
      console.log(`${this.Name} loves ${a}!`);
    });
  },
};

javascript.printLibraries();
