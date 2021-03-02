import Link from 'next/link'

export default function Grid(props) {
  const items = props.data.map((x, index) => {
    return (
      <Link href={x.link} key={index}>
        <a>
          <div className="rel">
            <h2>{x.title.replace(/-/g, " ").toUpperCase()}</h2>
            <img src={x.img} alt={x.title.replace(/-/g, " ")} loading="lazy" />
          </div>
        </a>
      </Link>
    )
  });

  return (
    <div className="grid">
      {items}
    </div>
  )
}