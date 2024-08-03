const Person = (props) => {
  const { name, age, image } = props
  return (
    <article className="person">
      <img src={image} alt="" className="img" />
      <div>
        <h4 className="name">{name}</h4>
        <p className="age">{age} years</p>
      </div>
    </article>
  )
}

export default Person
