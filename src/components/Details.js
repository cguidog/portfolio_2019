const Details = ({description}) => <ul>
    {description.map((descript) => {
        return (
            <li key={description.indexOf(descript)} dangerouslySetInnerHTML={{ __html: descript }} />
        )
    })}
</ul>

export default Details;