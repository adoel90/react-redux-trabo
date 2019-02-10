import { take, put, select } from 'redux-saga/effects'



//*Saga Watcher Log
export function* watchAndLog() {
    while (true) {
      const action = yield take('*')
      const state = yield select()
  
      console.log('What happened : ', action)
      console.log('State Effect after : ', state)
    }
  }

//*Saga Watcher 
// export function* watchFirstThreeTodoAction(){

// }