export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (students.constructor !== Array && students.every((el) => typeof el === 'string')) {
    throw TypeError('Students must be an array of strings');
    }
  
    this._name = name;
    this._length = length;
    this._students =  students;
  }

  // name getter
  get name() {
  return this._name
  }

  // name setter
  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }
  
  // length setter
  get length() {
    return this._length;
  }
  
  // length setter
  set length(newLength) {
    if (typeof newName !== 'number') throw TypeError('Length must be a number');
  }
  
  // students getter
  get students() {
    return this._students;
  }
  
  // students setter
  set students(newStudents) {
    if (newStudents.constructor !== Array && newStudents.every((el) => typeof el === 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
