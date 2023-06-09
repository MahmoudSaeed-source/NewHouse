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
        'Footer-pattern':"url('/src/assets/images/footer/photo-1477959858617-67f85cf4f1df.jfif')",
        'Footer-1':"url('/src/assets/images/footer/47289d02a876ac9323a7ca1e04405127l-m89429784x.jpg')",
        'Footer-2': "url('/src/assets/images/footer/photo-1477959858617-67f85cf4f1df.jfif')",
        'features-One':"url('/src/assets/images/features/1.jpg')",
        'features-two': "url('/src/assets/images/features/2.jpg')",
     
        
        
        
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
        'blue-title': '#38bdf8',
        "blue-hover":'#0b6091'
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