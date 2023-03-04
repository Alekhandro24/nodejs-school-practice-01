// console.log("heelooooooooo");
const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);
// console.log(__filename);

const filmsPath = path.join(__dirname, "..", "db", "films.json");
// console.log(filmsPath);

class FilesOperation {
  constructor(filmsPath) {
    this.filmsPath = filmsPath;
  }
  async display() {
    console.log(await this.read());
  }

  async read() {
    return await fs.readFile(this.filmsPath, "utf-8");
  }

  async create(data) {
    await fs.writeFile(this.filmsPath, JSON.stringify(data), null, 4);
  }

  async update(addFilm) {
    const filmsArr = await JSON.parse(await this.read());
    // console.log(Array.isArray(filmsArr));
    filmsArr.push(addFilm);
    this.create(filmsArr);
  }

  async remove() {
    await fs.unlink(this.filmsPath);
  }
}

const filmsData = [
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    id: "10",
  },
  {
    Title: "I Am Legend",
    Year: "2007",
    Rated: "PG-13",
    Released: "14 Dec 2007",
    Runtime: "101 min",
    id: "20",
  },
  {
    Title: "300",
    Year: "2006",
    Rated: "R",
    Released: "09 Mar 2007",
    Runtime: "117 min",
    id: "30",
  },
];

const newFilm = {
  Title: "Legenda",
  Year: "2009",
  Rated: "PG-16",
  Released: "14 Dec 2009",
  Runtime: "111 min",
  id: "40",
};

const file = new FilesOperation(filmsPath);
// file.display();
// file.create(filmsData);
// file.remove(filmsData);
file.update(newFilm);
