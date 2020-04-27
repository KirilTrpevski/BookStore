export class Book {
  public title: string;
  public genre: string;
  public author: string;
  public year: Date;
  public price: number;
  public description: string;
  public image: string;
  public pieces: number;

  constructor(title, genre, author, price, description, year, image, pieces) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.price = price;
    this.description = description;
    this.year = year;
    this.image = image;
    this.pieces = pieces;
  }

}
