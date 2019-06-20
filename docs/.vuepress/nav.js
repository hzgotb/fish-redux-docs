const links = [
  'guide',
  'library',
  // 'examples',
];

const text = {
  // zh: [ '指南' ,'库', '最佳实践' ],
  zh: [ '指南' ,'库' ],
  // en: [ 'Guide', 'Library', 'Examples' ],
  en: [ 'Guide', 'Library' ],
};

module.exports = (locale) => ({
  nav: links.map((link, index) => ({ text: text[locale][index], link: `/${locale}/${link}/` })),
});
