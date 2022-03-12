import loadingAnimation from 'assets/icons/activity-indicator.svg'

export const Loading = () => {
  return  (
    <div className="flex flex-row justify-center py-[18px]">
      <img className='animate-spin-slow' src={loadingAnimation} alt="loading animation"/>
      <h2 className="text-[#828282] font-bold ml-[10px] text-[17px]">Loading</h2>
    </div>
  )
}