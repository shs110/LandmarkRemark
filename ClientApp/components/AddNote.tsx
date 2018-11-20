import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { UserNote } from './FetchNotes';
import { UserNoteState } from './FetchNotes'

interface AddNoteState {
    usernote: UserNote;
    loading: boolean;
}

export class AddNote extends React.Component<RouteComponentProps<{}>, AddNoteState> {
    handleSave: any;
   
    constructor() {
        super();


        this.state = { loading: false, usernote: new UserNote }; 
     
    }

    private static handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target); 
        // POST request for Add employee.  
        
        fetch('api/UserNote/AddNote', {
            method: 'POST',
            body: data,
        })
        
    }
        
     

    private static renderCreateForm() {
        return (
            <form onSubmit={this.handleSave} >

                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="userName">User Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="userName"  required />
                    </div>
                </div >

                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Note">Note</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Note" required />
                    </div>
                </div >

                
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                </div >
            </form >
        )
    }  


    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : AddNote.renderCreateForm();

        return <div>
            <p>Add a Note and it will appear in the Fetch Notes list :</p>
            { contents }
        </div>;
    }

    
}

