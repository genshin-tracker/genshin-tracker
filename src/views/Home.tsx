import React from 'react';

import { Counter } from '../features/counter/Counter';

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <Counter />

        <p>There will be something here at some point</p>
      </header>
    </div>
  );
}
