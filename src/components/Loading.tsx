export default function Loading() {
  return (
    <div className="bg-slate-300 shadow rounded-lg p-4 w-full">
      <div className="animate-pulse rounded-lg bg-slate-200 h-64 w-full"/>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 pt-4">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}