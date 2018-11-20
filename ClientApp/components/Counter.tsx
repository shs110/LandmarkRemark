import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { geolocated } from 'react-geolocated';

interface CounterState {
    currentCount: number;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

        </div>;
    }



    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

//    ipLookUp () {
//  $.ajax('http://ip-api.com/json')
//  .then(
//      function success(response) {
//          console.log('User\'s Location Data is ', response);
//          console.log('User\'s Country', response.country);
//      },

//      function fail(data, status) {
//          console.log('Request failed.  Returned status of',
//                      status);
//      }
//  );
//}
}

