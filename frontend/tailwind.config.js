import flowbite from 'flowbite-react/tailwind';
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        'main-color': '#8056eb',
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '992px',
      },
      flex: {
        2: '2 2 0%',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [flowbite.plugin()],
  corePlugins: { container: false, screens: false },
};
