import React from 'react';
import { loremIpsum } from 'lorem-ipsum';

const articleContent = loremIpsum({
  count: 3,
  suffix: '<br/><br/>',
  units: 'paragraphs'
});

const App = () => {
  const comments = ['', '', '', ''].map(_ => {
    return loremIpsum({
      count: 2,
      units: 'sentences'
    });
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        marginTop: '50px'
      }}
    >
      {comments.map(comment => (
        <div style={{ background: '#F5F5F5', padding: '5px', width: '50%' }}>
          {comment}
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '10px',
              justifyContent: 'right'
            }}
          >
            <button>Edit</button>
            <button>Like</button>
            <button>Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
