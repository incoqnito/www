import { default as Preact, h } from 'preact'
import 'jquery'

class Repositories extends Preact.Component {
  constructor(props) {
    super(props)
    this.state = {
      repositories: []
    }
  }
  componentWillMount() {
    fetch('https://api.github.com/users/incoqnito/repos')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          repositories: data
        })
      })
  }
  render() {
    return (
      <div>
        <h3 style={{ color: 'white' }}>GitHub Repositories:</h3>
        <ul className="opensource-list">
          {
            this.state.repositories.map((repo) => (
              <li className="opensource-list-entry">
                <a target="_blank" href={repo.html_url}>
                  <h3>{ repo.name }</h3>
                  <h4>{ repo.full_name }</h4>
                  <div class="stars"><span>{ repo.stargazers_count }</span><img src="/static/star.svg" /></div>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

Preact.render(<Repositories />, document.querySelector('#opensource'))
