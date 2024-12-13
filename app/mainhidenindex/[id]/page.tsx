"use client";
import { useRouter } from "next/navigation";

const CourseDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Course Details</h1>
      <p>Details about course ID: {id}</p>
      {/* Add actual details here */}
    </div>
  );
};

export default CourseDetail;
