import {TagModel} from "./tag.model";

export interface ChronicDiseaseModel {
  id: number;
  name: string;
  tags: TagModel[];
  note: string;
}
