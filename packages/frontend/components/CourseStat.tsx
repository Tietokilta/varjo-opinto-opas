const CourseStat = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="inline-flex text-3xl font-bold">{value}</p>
      <h2 className="text-xl">{label}</h2>
    </div>
  )
}

export default CourseStat
