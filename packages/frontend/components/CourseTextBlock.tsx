const CourseTextBlock = ({ label, text }: { label: string; text: string }) => {
  return (
    <div>
      <h2 className="font-bold">{label}</h2>
      <p>{text}</p>
    </div>
  )
}

export default CourseTextBlock
