import {TagModel} from "./tag.model";

export interface AllergyModel {
  id: number;
  name: number;
  tags: TagModel[];
  note: string;
}
