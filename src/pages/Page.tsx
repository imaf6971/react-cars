import './Page.sass'

const Page = ({title, img}: PageProps) => {
  return (
    <main className="content" style={{
      backgroundImage: `url("${img}")`
    }}>
      <h1 className="title">
        {title}
      </h1>
    </main>
  )
}

interface PageProps {
  title: string,
  img: string
}

export default Page
