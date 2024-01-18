export interface Question {
  _id: string;
  text: string;
  options: { _id: string; name: string }[];
  correctOption: string;
}

export interface Test {
  _id: string;
  name: string;
  description: string;
  questions: Question[];
}
