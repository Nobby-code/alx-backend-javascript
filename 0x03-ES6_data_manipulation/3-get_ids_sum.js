export default function getListStudentIds(students) {
  const ids = students.map((s) => s.id);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return ids.reduce(reducer);
}
