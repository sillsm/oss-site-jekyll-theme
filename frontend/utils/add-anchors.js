// http://blog.parkermoore.de/2014/08/01/header-anchor-links-in-vanilla-javascript-for-github-pages-and-jekyll/
const anchorForId = (id) => {
  const anchor = document.createElement('a');

  anchor.className = 'anchor';
  anchor.href = '#' + id;
  anchor.innerHTML = '<span class="octicon octicon-link"></span>';

  return anchor;
};

const linkifyAnchors = (level, containingElement) => {
  const headers = containingElement.getElementsByTagName('h' + level);

  for (let h = 0; h < headers.length; h++) {
    const header = headers[ h ];

    if (typeof header.id !== 'undefined' && header.id !== '') {
      header.appendChild(anchorForId(header.id));
    }
  }
};

export const createAnchors = () => {
  const contentBlock = document.getElementsByClassName('js-article-content')[ 0 ];

  if (!contentBlock) {
    return;
  }
  for (let level = 1; level <= 6; level++) {
    linkifyAnchors(level, contentBlock);
  }
};
