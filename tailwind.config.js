/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'logo-red': '#e63f37',
        'logo-black': '#383839'
      }
    },
    fontFamily: {
      'sans': ['"Helvetica Neue"', '"Arial"' ]
    }
  },
  plugins: [],
}