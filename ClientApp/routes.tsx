import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchLocation } from './components/Location';
import { FetchNotes } from './components/FetchNotes';
import { AddNote } from './components/AddNote';

export const routes = <Layout>
    <Route exact path='/' component={FetchLocation } />
    <Route path='/location' component={FetchLocation} />
    <Route path='/fetchnotes' component={FetchNotes} />
    <Route path='/' component={AddNote} />
</Layout>;
