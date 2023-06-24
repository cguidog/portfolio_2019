import Match from '../components/Match'
export default function Hero() {
  return (
    <section className="flex min-h-[100vh] lg:items-center lg:justify-center p-4">
    <div className="w-full md:max-w-7xl lg:m-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4 h-fit w-full">
        <div className="bg-gradient-to-r from-sky-700 to-sky-900 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.75)] grid grid-rows-2 p-4 opacity-0 rounded-lg transition-all ease-out duration-300 animate-block_2 row-span-2 relative">
          <div className="flex flex-col justify-end p-4 text-text-white" >
            <p className="text-5xl md:text-6xl font-extrabold">Hi!</p>
            <h1 className="text-4xl">I'm Carlos Guido,</h1></div>
          <div className="flex flex-col justify-start p-4">
            <div className="grid grid-cols-4">
              <div className="col-span-1 grid md:items-center text-5xl md:text-6xl text-text-white">
                <span>a</span>
              </div>
              <div className="col-span-3 grid items-center text-5xl md:text-6xl text-text-white">
                <div className="max-h-[60px] overflow-hidden">
                  <div className="animate-slide_up h-[70px] overflow-hidden"><p>skillful</p></div>
                  <div className="animate-slide_up_2 h-[70px] overflow-hidden"><p className="">creative</p></div>
                  <div className="animate-slide_up_3 h-[70px] overflow-hidden"><p className="">reliable</p></div>
                  <div className="h-[70px] overflow-hidden"><p>full-stack</p></div>
                </div>
              </div>
            </div>
            <div className="grid items-center text-3xl md:text-4xl text-text-white">
              <span>software developer</span>
            </div>
          </div>
        </div>
        <div className="animate-block col-span-2 row-span-2 grid grid-col-1 opacity-0 rounded-lg">
          <Match />
        </div>
      </div>
      </div>
    </section>
  )
}