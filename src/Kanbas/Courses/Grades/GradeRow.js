import React from 'react';

function GradeRow({ user, assignments, grades }) {
  return (
      <tr>
        <td className="text-danger">
          {user.firstName} {user.lastName}
        </td>
        {assignments.map((assignment) => {
          const grade = grades.find(
              (grade) => grade.student === user._id && grade.assignment === assignment._id
          );
          return <td key={assignment._id}>{grade?.grade || ""}</td>;
        })}
      </tr>
  );
}

export default GradeRow;
