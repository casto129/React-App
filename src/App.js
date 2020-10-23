import React, { Component } from 'react';
import './App.css';
import Customer from './component/customer';

const customers = [
  {
    'id': '1',
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': '2',
    'image': 'https://placeimg.com/64/64/2',
    'name': '강주성',
    'birthday': '981006',
    'gender': '남자',
    'job': '사원'
  },
  {
    'id': '3',
    'image': 'https://placeimg.com/64/64/3',
    'name': '정광식',
    'birthday': '861209',
    'gender': '남자',
    'job': '사장'
  }
]

class App extends Component {
  render() {
    return (
      <div className="gray-background">
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
