
import Counter from './components/Counter'

import Title from './components/Title'

import Background from './assets/bg_manon_app.jpg'

import useCountdown from './hooks/useCountdown'

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Jun 2, 2023 00:00:00")

  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <div className="container">
          <Title />
        <div className="countdown-container">
          <Counter title="Days" number={day}/>
          <Counter title="Hours" number={hour}/>
          <Counter title="Minutes" number={minute}/>
          <Counter title="Seconds" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
