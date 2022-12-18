import { loremIpsum } from 'lorem-ipsum';

const mount = element => {
  const articleContent = loremIpsum({
    count: 3,
    suffix: '<br/><br/>',
    units: 'paragraphs'
  });

  element.innerHTML = `
<div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
  <h1>Article</h1>
  <div style="width: 50%">${articleContent}</div>
  <div style="display: flex; gap: 15px;"><button>Edit</button><button>Subscribe</button><button>Share</button></div>
  <div style="width: 50%; height: 2px; background: gray"></div>
</div>`;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('article-dev');

  if (el) {
    mount(el);
  }
}

export { mount };
