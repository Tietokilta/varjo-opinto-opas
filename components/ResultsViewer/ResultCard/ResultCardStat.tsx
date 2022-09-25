const ResultCardStat = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold">{value}</p>
      <h2 className="text-sm">{label}</h2>
    </div>
  )
}

export default ResultCardStat
