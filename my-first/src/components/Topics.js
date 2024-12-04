import React from 'react';
import './Topics.css';

const Topics = () => {
  return (
    <section className="topics-section">
      <h2>Topics</h2>
      <div className="topics">
        <button onClick={() => alert('Navigate to Aptitude')}>Aptitude</button>
        <button onClick={() => alert('Navigate to Verbal')}>Verbal</button>
        <button onClick={() => alert('Navigate to Reasoning')}>Reasoning</button>
        <button onClick={() => alert('Navigate to OS')}>Operating System</button>
        <button onClick={() => alert('Navigate to Coding')}>Coding</button>
      </div>

      <h2>Company Wise Papers</h2>
      <div className="companies">
        <button onClick={() => alert('Navigate to Infosys')}>Infosys</button>
        <button onClick={() => alert('Navigate to TCS')}>TCS</button>
        <button onClick={() => alert('Navigate to Wipro')}>Wipro</button>
        <button onClick={() => alert('Navigate to Microsoft')}>Microsoft</button>
        <button onClick={() => alert('Navigate to Google')}>Google</button>
      </div>
    </section>
  );
};

export default Topics;
