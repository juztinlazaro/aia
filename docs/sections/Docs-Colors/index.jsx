import React from 'react';

export default class Colors extends React.Component {
    render() {
    return (
      <div>
        <h1 className="doc-heading"> Colors </h1>
        <p className="lead">
          Our variants are called sky, emerald, sun, crimson; which is to Bootstrap's info, success, warning, danger respectively.
        </p>

        <section className="doc-bottom-space">
          <h3>Main</h3>
          <div title="-primary" className="doc-swatch -primary"></div>
          <div title="-sidebar-lt" className="doc-swatch -sidebar-lt"></div>
          <div title="-sidebar" className="doc-swatch -sidebar"></div>
          <div title="-sidebar-dk" className="doc-swatch -sidebar-dk"></div>
        </section>

        <section className="doc-bottom-space">
          <h3>Variations</h3>
          <div title="-sky" className="doc-swatch -sky"></div>
          <div title="-emerald" className="doc-swatch -emerald"></div>
          <div title="-sun" className="doc-swatch -sun"></div>
          <div title="-crimson" className="doc-swatch -crimson"></div>
        </section>

        <section className="doc-bottom-space">
          <h3>Dark Variations</h3>
          <div title="-sky-dk" className="doc-swatch -sky-dk"></div>
          <div title="-emerald-dk" className="doc-swatch -emerald-dk"></div>
          <div title="-sun-dk" className="doc-swatch -sun-dk"></div>
          <div title="-crimson-dk" className="doc-swatch -crimson-dk"></div>
        </section>

        <section className="doc-bottom-space">
          <h3>Gray</h3>
          <div title="-gray-lt" className="doc-swatch -gray-lt"></div>
          <div title="-gray" className="doc-swatch -gray"></div>
          <div title="-gray-dk" className="doc-swatch -gray-dk"></div>
          <div title="-black" className="doc-swatch -black"></div>
        </section>
      </div>
    );
  }
}
