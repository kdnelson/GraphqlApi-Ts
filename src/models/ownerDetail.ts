import { Website } from "./website";

export class OwnerDetail {
    constructor(
      public id: Number,
      public name: String,
      public websites: Website[] = [],
    ){}
  }