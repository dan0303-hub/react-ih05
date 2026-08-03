import { useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>강의 상세</h1>
      <p>{id}번 강의입니다.</p>
    </div>
  );
}

export default CourseDetail;
