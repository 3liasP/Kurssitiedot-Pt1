const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part pt={props.pt1} ex={props.ex1} />
      <Part pt={props.pt2} ex={props.ex2} />
      <Part pt={props.pt3} ex={props.ex3} />
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>
      {props.pt} {props.ex}
    </p>
  </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

// Tuleeko renderöinti hoitaa yhdellä Content-komponentilla, vai onko tämä ok?
  return (
    <div>
      <Header course={course} />
      <Content pt1={part1.name} ex1={part1.exercises} />
      <Content pt2={part2.name} ex2={part2.exercises} />
      <Content pt3={part3.name} ex3={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
    </div>
  )
}

export default App