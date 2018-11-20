import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchLocationState {
    lattitude: number;
    longitude: number;
    zip: string;
    city: string;
    region: string;
    loading: boolean
}
export class FetchLocation extends React.Component<RouteComponentProps<{}>, FetchLocationState> {
    constructor() {
        super();
        this.state = { lattitude: 0, longitude: 0, city: "", zip: "", region: "", loading: true };


        fetch('api/Location/GetLocation')
            .then(response => response.json() as Promise<FetchLocationState>)
            .then(data => {
                this.setState({ lattitude: data.lattitude, longitude: data.longitude, city: data.city, zip: data.zip, region: data.region, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchLocation.renderLocationTable(this.state);

        let mapContent = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchLocation.renderMap(this.state);
        

        return <div>
            <h1>User Locator</h1>
            <p>This component displays user location based on IP Address</p>
            {contents}
            {mapContent}

            
           

        </div>;
    }

    private static renderLocationTable(location: FetchLocationState) {
        let maplink = "https://maps.google.com/maps?q=" + location.lattitude + "," + location.longitude + "&hl=en&z=13&amp;output=embed" 
        return <table className='table'>
            <thead>
                <tr>
                    <th>Lattitude</th>
                    <th>Longitude</th>
                    <th>Zip</th>
                    <th>City</th>
                    <th>Region</th>               
                </tr>
            </thead>
            <tbody>
                <tr> <td>{location.lattitude}</td>
                        <td>{location.longitude}</td>
                        <td>{location.zip}</td>
                        <td>{location.city}</td>
                        <td>{location.region}</td>
                    </tr>
                
            </tbody>


      
        </table>;
    }

    private static renderMap(location: FetchLocationState) {
        return <div>

            
             <iframe width="50%"
                 height="300"
                 scrolling="yes"
                 src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyDxxg8cPF4lUAoOIjk32qC25YiGnM8CXyo&q=' + location.lattitude + ',' + location.longitude + '&zoom=13'} 

            >
            </iframe>

            
            
        </div>;
        
    }
}




