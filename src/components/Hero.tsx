import Match from '../components/Match'
export default function Hero() {
  return (
    <section className="grid grid-cols-4 grid-rows-4 gap-4 h-[90vh] p-4">
      <div className="bg-slate-300 rounded-lg opacity-0 animate-appear">
        1
      </div>
      <div className="animate-appear_400 bg-slate-300 opacity-0 rounded-lg">
        2
      </div>
      <div className="animate-appear_500 bg-slate-300 opacity-0 rounded-lg">
        3
      </div>
      <div className="animate-appear_700 bg-slate-300 opacity-0 rounded-lg">
        4
      </div>
      <div className="animate-appear_400 bg-slate-300 opacity-0 rounded-lg">
        5
      </div>
      <div className="bg-sky-800 grid grid-rows-2 p-4 opacity-0 rounded-lg animate-block_2 row-span-2">
        <div className="flex flex-col justify-center p-4 text-slate-50" >
          <p className="text-6xl">Hi!</p>
          <h1 className="text-4xl">I'm Carlos Guido,</h1></div>
        <div className="flex flex-col justify-center p-4">
          <div className="grid grid-cols-4">
            <div className="col-span-1 grid items-center text-6xl text-slate-50">
              <span>a</span>
            </div>
            <div className="col-span-3 grid items-center text-6xl text-slate-50">
              <div className="max-h-[60px] overflow-hidden">
                <div className="animate-slide_up h-[70px] overflow-hidden"><p>skillful</p></div>
                <div className="animate-slide_up_2 h-[70px] overflow-hidden"><p className="">creative</p></div>
                <div className="animate-slide_up_3 h-[70px] overflow-hidden"><p className="">reliable</p></div>
                <div className="h-[70px] overflow-hidden"><p>full-stack</p></div>
              </div>
            </div>
          </div>
          <div className="grid items-center text-4xl text-slate-50">
            <span>software developer</span>
          </div>
        </div>
      </div>
      <div className="animate-appear_600 bg-slate-300 opacity-0 rounded-lg">
        7
      </div>
      <div className="animate-appear_800 bg-slate-300 opacity-0 rounded-lg">
        8
      </div>
      <div className="animate-appear_500 bg-slate-300 opacity-0 rounded-lg">
        9
      </div>
      <div className="animate-block bg-teal-600 col-span-2 grid grid-col-1 opacity-0 p-4 rounded-lg">
        <Match />
      </div>
      <div className="animate-appear_600 bg-slate-300 opacity-0 rounded-lg">
        11
      </div>
      <div className="bg-slate-300 rounded-lg opacity-0 animate-appear_900">
        12
      </div>
      <div className="bg-slate-300 rounded-lg opacity-0 animate-appear_800">
        13
      </div>
      <div className="bg-slate-300 rounded-lg opacity-0 animate-appear_900">
        14
      </div>
    </section>
  )
}