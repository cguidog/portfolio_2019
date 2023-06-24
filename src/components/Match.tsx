import { useEffect, useState } from 'react';
import Icon, { IconType } from './Icon';

const cardsArray: IconType[] = ['coffee', 'coffee', 'iceCream', 'iceCream', 'idea', 'idea', 'music', 'music', 'pet', 'pet', 'phone', 'phone', 'settings', 'settings', 'smile', 'smile'];
export default function Match() {
  const [cards, setCards] = useState<IconType[]>(cardsArray);
  const [match, setMatch] = useState<IconType[]>([]);
  const [matchIndex, setMatchIndex] = useState<number[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [initial, setInitial] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(true);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(()=> {
      setShow(false);
      setTimeout(()=> {
        setCards(shuffleArray(cardsArray));
        setInitial(false)
      }, 1000);
    }, 6000)
  }, []);

  useEffect(() => {
    if (match.length === 2) {
      if (match[0] === match[1]) {
        setMatches([...matches, matchIndex[0], matchIndex[1]]);
        setMatch([]);
        setMatchIndex([]);
        setReset(true);
      } else {
          setReset(true);
          setTimeout(()=> {
            setMatch([]);
            setMatchIndex([]);
        }, 1000);
      }
    }
  }, [match])

  useEffect(()=> {
    if (matches.length === 16) {
      setTimeout(()=> {setMatches([]);
      setCards(shuffleArray(cardsArray));},1000); 
    }
  }, [matches])

  const handleMatch = (item: IconType, index: number): void => {
    reset && setReset(false);
    setMatch([...match, item]);
    setMatchIndex([...matchIndex, index])
  }

  const shuffleArray = (array: IconType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="gap-4 grid grid-cols-4 lg:grid-cols-8 grid-rows-4 lg:grid-rows-2">
      {cards && cards.map((card, index) => {
        return (
          <div className='[perspective:1000px] h-20 lg:h-full w-full' key={index}>
            <button disabled={matches.indexOf(index) !== -1 || matchIndex.indexOf(index) !== -1 || initial }
            id={index.toString()}
            onClick={() => match.length < 2 && handleMatch(card, index)}
            className={`${matchIndex.indexOf(index) !== -1 || matches.indexOf(index) !== -1 || show ? 'rotate-y-180' : null} ${matches.indexOf(index) != -1 ? 'rotate-y-90 animate-wiggle' : null} ${matches.length === 16 && 'rotate-y-180'} duration-300 h-full w-full relative rounded-md transition-all lg:enabled:hover:scale-110 [transform-style:preserve-3d]`}>
              <Icon style={'bg-gradient-to-r from-sky-700 to-sky-900 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.75)] fill-slate-50 rounded-md rotate-y-180'} name={card} />
              <Icon style={`${matches.indexOf(index) !== -1 ? 'hidden' : null} bg-gradient-to-r from-sky-700 to-sky-900 bg-slate-400 rounded-md [backface-visibility:hidden]`} name={'code'} />
            </button>
          </div>
        )
      })}
    </div>
  )
}