import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('http://localhost:3000/transactions', () => {

      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 500,
          type: 'deposit',
          category: 'Food',
          createAt: new Date(),
      }
      ]
    })

    this.post('./transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return data
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
