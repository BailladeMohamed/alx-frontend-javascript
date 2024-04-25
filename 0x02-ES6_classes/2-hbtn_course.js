// for each attribute there is a getter and setter
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    this._name = name;

    if (typeof length !== 'number') throw TypeError('Length must be a number');
    this._length = length;

    if (!Array.isArray(students) && students.every((i) => typeof i !== 'string')) throw TypeError('Students must be an array of strings');
    this._students = students;
  }

  get name() { return this._name; }

  set name(Name) {
    if (typeof Name !== 'string') throw TypeError('Name must be a string');
    this._name = Name;
  }
OAOAOA
  get length() { return this._length; }

  set length(Length) {
OAOAOA    if (typeof Length !== 'number') throw TypeError('Length must be a number');
    this._length = Length;
OAOAOA  }
OAOAOA
  get students() { return this._students; }

OAOAOA  set students(Students) {
    if (!Array.isArray(Students) && Students.every((i) => typeof i !== 'string')) throw TypeError('Students must be an array of strings');
OAOAOA    this._students = Students;
  }
}
