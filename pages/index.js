const Home = () => (
  <article id="home">
    <div className="center">
      {['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6'].map((id) => (
        <div key={id} className="circle" data-bg={id} />
      ))}
    </div>
  </article>
)

export default Home
