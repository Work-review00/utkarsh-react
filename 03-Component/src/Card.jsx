

const Card = (props) => {

    console.log(props)
  return (
    <div className="card">
        <img src={props.img}></img>
        <h1>
          {props.user} {props.age}
        </h1>
        <p>
          {props.p}
        </p>
        <button>
          View Profile 

        </button>
      </div>
  )
}

export default Card
