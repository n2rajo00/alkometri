import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState('male')
  const [level, setLevel] = useState(0)
  const [bottleCount, setBottleCount] = useState(1);
  const bottles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

  const calculate = (e) => {
    e.preventDefault()
    let level = 0
    let grams = (bottleCount * 0.33) * 8 * 4.5
    let burning = weight / 10
    let left = grams - (burning - bottleCount)

    if (gender === 'male') {
      level = left / (weight * 0.7)
    } else {
      level = left / (weight * 0.6)
    }
    setLevel(level)
  }

  return (
    <div id='container'>
      <h2>Calculating alcohol blood level</h2>
      <div>
        <label>Weight (kg)</label>
        <input type='number' value={weight} onChange={e => setWeight(Number.parseInt(e.target.value))} />
      </div>
      <div>
        <label>Bottles (0,33l)</label>
        <select onChange={(e) => setBottleCount(e.target.value)}>
          {
            bottles.map(bottle => (
              <option type='number' value={bottle}>{bottle}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time (hours)</label>
        <select>
          {
            bottles.map(bottle => (
              <option type='number' value={bottle}>{bottle}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type='radio' name='gender' value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type='radio' name='gender' value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <label>Result</label>
        <output type='number' value={level} onChange={e => setLevel(e.target.value)}> {level.toFixed(2)}</output> ‰
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>


    </div>
  );
}

export default App;
