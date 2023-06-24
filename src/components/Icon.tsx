const icons = {
  code: 'case',
  coffee: 'case',
  iceCream: 'case',
  idea: 'case',
  music: 'case',
  pet: 'case',
  phone: 'case',
  settings: 'case',
  smile: 'case'
}

export type IconType = 'code' | 'coffee' | 'iceCream' | 'idea' | 'music' | 'pet' | 'phone' | 'settings' | 'smile';

interface IconInt {
  name: IconType;
  style: string;
}

export default function Icon( { name, style }: IconInt) {
  const svgElement = icons[name];
  return (
    <div className={`${style} absolute inset-0 h-full w-full flex justify-center items-center`} dangerouslySetInnerHTML={{__html: svgElement}}/>
  )
}