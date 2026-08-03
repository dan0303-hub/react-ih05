import { Link } from "react-router-dom";

function CourseList() {
  const courses = [
    {
      id: 1,
      title: "React 기초",
    },
    {
      id: 2,
      title: "React State",
    },
    {
      id: 3,
      title: "React Router",
    },
  ];

  return (
    <div>
      <h1>강의 목록</h1>

      <ul>
        {courses.map(function (course) {
          return (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseList;
