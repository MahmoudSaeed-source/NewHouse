module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/hero/image1.jpg')",
        
      },
      height: {
        '600':'600px'
      },
      fontFamily: {
        'Links': ['Oswald'],
        'title': ['Bitter'],
        'body': ['Merriweather']
      },
      colors: {
        'hoverTextColor': '#e08c04',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
     
      },
    },
  },
  plugins: [],
}