const Course = ({ course }) => {
    return (
        <div>
        <h1>{course.name}</h1>
        {course.parts.map(part =>
            <p key={part.id}>{part.name} {part.exercises}</p>
        )}
        <strong>Total of {course.parts.reduce((sum, part) => {
            return sum + part.exercises;
        }, 0)} exercises.</strong>

        </div>
    )
  }

export default Course;