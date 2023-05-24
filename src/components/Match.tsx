import { useEffect, useState } from 'react';
import Icon, { IconType } from './Icon';

const cardsArray: IconType[] = ['coffee', 'coffee', 'iceCream', 'iceCream', 'idea', 'idea', 'music', 'music', 'pet', 'pet', 'phone', 'phone', 'settings', 'settings', 'smile', 'smile'];
export default function Match() {
  const [cards, setCards] = useState<IconType[]>(cardsArray);
  const [match, setMatch] = useState<IconType[]>([]);
  const [matchIndex, setMatchIndex] = useState<number[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [show, setShow] = useState<boolean>(true);

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
          setMatch([]);
          setMatchIndex([]);
        }, 1000);
      }
    }

  }, [match])

  const handleMatch = (item: IconType, index: number): void => {
    setMatch([...match, item]);
    setMatchIndex([...matchIndex, index])
  }


  return (
    <div className="gap-4 grid grid-cols-8 grid-rows-2">
      {cards && cards.map((card, index) => {
        return (
          <div key={index} className={`${matchIndex.indexOf(index) !== -1 ? 'bg-sky-300' : matches.indexOf(index) !== -1 ? 'bg-teal-300' : 'bg-slate-300 hover:scale-105'} ${show ? 'animate-flip' : 'animate-flip_back' } rotate-y-90 rounded-xl`}>
            <button disabled={matches.indexOf(index) !== -1 || matchIndex.indexOf(index) !== -1} id={index.toString()} onClick={() => match.length < 2 && handleMatch(card, index)} className={`${matchIndex.indexOf(index) === -1 && matches.indexOf(index) === -1 ? 'hover:fill-slate-700' : 'hover:fill-slate-500' } fill-slate-500 h-full w-full flex items-center justify-center`}>
              <Icon show={matchIndex.indexOf(index) !== -1 || matches.indexOf(index) !== -1 || show} name={card} />
              <Icon show={matchIndex.indexOf(index) === -1 && matches.indexOf(index) === -1 && !show} name={'code'} />
            </button>
          </div>
        )
      })}
    </div>
  )
}