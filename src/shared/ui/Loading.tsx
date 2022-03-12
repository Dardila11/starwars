import loadingAnimation from 'assets/icons/activity-indicator.svg'

export const Loading = () => {
  return  (
    <div className="flex flex-row justify-center py-4 px-4">
      <img className='animate-spin-slow' src={loadingAnimation} alt="loading animation"/>
      <h2 className="text-light font-bold ml-2 text-17">Loading</h2>
    </div>
  )
}