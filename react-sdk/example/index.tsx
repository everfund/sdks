import * as ReactDOM from 'react-dom';
import { EverfundModal } from '../.';
import 'react-app-polyfill/ie11';
import { useState } from 'react';
import * as React from 'react';

const App = () => {
  const [success, setSuccess] = useState(false);
  const [showEverfundModal, setShowEverfundModal] = useState(false);

  console.log(showEverfundModal);
  return (
    <div>
      <button onClick={() => setShowEverfundModal(true)}>
        Continue to payment
      </button>

      <EverfundModal
        code="demo"
        open={showEverfundModal}
        onSuccess={(data) => {
          console.log('Everfund success', data);
          setSuccess(true);
        }}
        onFailure={(err) => {
          console.log('Everfund failed', err);
          setSuccess(true);
        }}
        onClose={() => {
          setShowEverfundModal(false);
          if (success) {
            console.log('Payment success');
          } else {
            console.log('Payment failed');
          }
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
