import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

export default (
  <Router history={createHashHistory()}>
    <Route path="/" component={require('./App')}>
      <IndexRoute component={require('./sections/.Home')} />
      <Route path="about" component={require('./sections/.About')} />
      <Route component={require('./sections/Docs')}>
        <Route path="scaffolding" component={require('./sections/Docs-Scaffolding')} />
        <Route path="layout" component={require('./sections/Docs-Layout')} />
        <Route path="type" component={require('./sections/Docs-Type')} />
        <Route path="tables" component={require('./sections/Docs-Tables')} />
        <Route path="forms" component={require('./sections/Docs-Forms')} />
        <Route path="alerts" component={require('./sections/Docs-Alerts')} />
        <Route path="buttons" component={require('./sections/Docs-Buttons')} />
        <Route path="labels" component={require('./sections/Docs-Labels')} />
        <Route path="panels" component={require('./sections/Docs-Panels')} />
        <Route path="slate" component={require('./sections/Docs-Slate')} />
        <Route path="utilities" component={require('./sections/Docs-Utilities')} />
        <Route path="colors" component={require('./sections/Docs-Colors')} />
        <Route path="guidelines" component={require('./sections/Docs-Guidelines')} />
      </Route>
    </Route>
  </Router>
);
