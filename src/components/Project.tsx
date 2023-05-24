import { ProjectInt } from "@/resources/projects"

export default function Project(props: ProjectInt) {
  const {name, url, githubUrl, thumbnail, features } = props;
  return (
    <div className="bg-slate-300 rounded-lg">
      {name && <h1>{name}</h1>}
      {thumbnail && <p>{thumbnail}</p>}
      {url && <a href={url} target="_blank">Link</a>}
      {githubUrl && <a href={githubUrl} target="_blank">Link</a>}
      {features && 
        <ul>
          {features.map(feature => <li key={features.indexOf(feature)}>{feature}</li>)}
        </ul>}
    </div>
  )
}