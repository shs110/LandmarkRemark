import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import SearchInput, { createFilter } from 'react-search-input';


//This component adds notes and a search form to search for notes
const KEYS_TO_FILTERS = ['userName', 'note']
export class UserNoteState {
    usernotes: UserNote[];
    loading: boolean;
    searchTerm: string;
}

export class FetchNotes extends React.Component<RouteComponentProps<{}>, UserNoteState> {
 
    constructor(props) {
        super(props);
        this.state = { usernotes: [], loading: true, searchTerm:'' };

        fetch('api/UserNote/GetAllNotes')
            .then(response => response.json() as Promise<UserNote[]>)
            .then(data => {
                this.setState({ usernotes: data, loading: false });
            });
        this.searchUpdated = this.searchUpdated.bind(this)
    }

   


    public render() {
        var filterednotes = this.state.usernotes.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchNotes.renderNotesTable(filterednotes);

        return <div>
            <h1>User Notes</h1>
            <p>This component demonstrates fetching data from the server.</p>

            <SearchInput className="searchInput" onChange={this.searchUpdated} />

            {contents}
        </div>;
    }

    private static renderNotesTable(usernotes: UserNote[]) {
        return <div>
            
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>City</th>
                    <th>Lattitude</th>
                    <th>Longitude</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {usernotes.map(note =>
                    <tr key={note.id}>
                        <td>{note.id}</td>
                        <td>{note.userName}</td>
                        <td>{note.city}</td>
                        <td>{note.lattitude}</td>
                        <td>{note.longitude}</td>
                        <td>{note.note}</td>
                        
                </tr>
            )}
            </tbody>
        </table>
            </div>;
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
}


export class UserNote {
    id: number
    userName: string; 
    city: string;   
    lattitude: number;
    longitude: number;
    note: string
    
    
}
