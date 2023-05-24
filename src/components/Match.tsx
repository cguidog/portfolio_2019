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
  const [hover, setHover] = useState<number | null>(null);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    function shuffleArray(array: IconType[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    setTimeout(()=> {
      setShow(false);
      setCards(shuffleArray(cardsArray));
      setTimeout(()=> setInitial(false), 1000);
    }, 7000)
  }, []);

  useEffect(() => {
    if (match.length === 2) {
      if (match[0] === match[1]) {
        setMatches([...matches, matchIndex[0], matchIndex[1]]);
        setMatch([]);
        setMatchIndex([]);
      } else {
        setTimeout(() => {
          setReset(true);
          setTimeout(()=> {
            setMatch([]);
            setMatchIndex([]);
          }, 200)
        }, 1200);
      }
    }

  }, [match])

  const handleMatch = (item: IconType, index: number): void => {
    reset && setReset(false);
    setHover(null);
    setMatch([...match, item]);
    setMatchIndex([...matchIndex, index])
  }

  const handleHover = (index: number): void => {
    index !== hover && matches.indexOf(index) === -1 && matchIndex.indexOf(index) === -1 && setHover(index);
    index === hover && setHover(null);
  }


  return (
    <div className="gap-4 grid grid-cols-8 grid-rows-2">
      {cards && cards.map((card, index) => {
        return (
          <div key={index}>
            <button disabled={matches.indexOf(index) !== -1 || matchIndex.indexOf(index) !== -1}
            id={index.toString()}
            onClick={() => match.length < 2 && handleMatch(card, index)}
            onMouseEnter={()=>handleHover(index)}
            onMouseLeave={()=>handleHover(index)}
            className={`
            ${matchIndex.indexOf(index) !== -1 ? 'bg-sky-300' : matches.indexOf(index) !== -1 ? 'bg-teal-300' : 'bg-slate-300'} 
            ${ initial ? 'rotate-y-90' : null} 
            ${initial && (show ? 'animate-flip_5500' : 'animate-flip_back') } 
            ${index === hover ? 'animate-wiggle' : null} 
            ${matchIndex.indexOf(index) !== -1 && !reset ? 'animate-flip_back' : null} 
            ${matchIndex.indexOf(index) !== -1 && reset ? 'animate-flip_200' : null} 
            fill-slate-500 flex items-center justify-center p-2 rounded-xl disabled:fill-slate-500 hover:fill-slate-700
            `}>
              <Icon show={matchIndex.indexOf(index) !== -1 || matches.indexOf(index) !== -1 || show} name={card} />
              <Icon show={matchIndex.indexOf(index) === -1 && matches.indexOf(index) === -1 && !show} name={'code'} />
            </button>
          </div>
        )
      })}
    </div>
  )
}