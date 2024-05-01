// Task 1: Building a Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task 2: Extending the Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3: Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Task 4: Writing a class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
