
const Title = ({ user }) => {
  if (user === '') {
    return (
      <div id="title">
        <h1>Welcome to Bowling!</h1>
      </div>
    )
  } else {
    return (
      <div id="title">
        <h1>Welcome to Bowling, {user}!</h1>
      </div>
    )
  }
}

export default Title;
