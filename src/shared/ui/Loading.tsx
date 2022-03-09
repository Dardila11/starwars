import loadingAnimation from '../../assets/icons/activity-indicator.svg'

export const Loading = () => {
  return  (
    <div className="flex flex-row justify-center py-[18px]">
      <img className='motion-reduce:animate-spin' src={loadingAnimation} alt="loading animation"/>
      <h2 className="text-[#828282] ml-[10px]">Loading...</h2>
    </div>
  )
}