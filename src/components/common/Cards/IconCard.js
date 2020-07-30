import Bubble from '../Bubbles/Bubble'

export default function IconCard({ title, details, customClass, colorMode, ...props }) {
  return (
    <div className={`${customClass} w-full md:w-4/12 px-4 text-center`}>
      <div
        className={`${colorMode === 'dark' ? 'bg-dark' : 'bg-lighter'} ${
          colorMode === 'dark' ? 'text-light' : 'text-darker'
        } relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg`}
      >
        <div className="px-5 py-5 flex-auto overflow-hidden">
          <Bubble size="md" {...props} />
          <h6>{title}</h6>
          <p className="mt-2 mb-4">{details}</p>
        </div>
      </div>
    </div>
  )
}
