/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/**/*.{js,ts,jsx,tsx}",
      // "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: "Poppins",
         },
         aspectRatio: {
            "3/4": "3 / 4",
            "3.5/4": "3.5 / 4",
         },
         colors: {
            blue: {
               100: "#DDF3FD",
               300: "#71BED7",
               600: "#3570d3",
               800: "#324767",
            },
            gray: {
               100: "#efefef",
               // 300: '#71BED7',
               // 500: '#3570d3',
               // 600: '#3570d3',
            },
            light: "gray",
            muted: "#5d5d5d",
            customBlue: "#2f3186",
            customPurple: "#eae9f6",
            customGreen: "#8CC666",
            customBlue1: "#1E396C",
            toBlue: "#5073AE",
            customGray: "#585858",
            customBlue2: "#0575BC",
         },
         backgroundImage: {
            news_events: "url('/assets/news_events.svg')",
            case_studies: "url('/assets/case_studies.svg')",
            blogs: "url('/assets/blogs.svg')",
            papers: "url('/assets/papers.svg')",
         },
      },
   },
   plugins: [
      require("@tailwindcss/line-clamp"),
      require("@tailwindcss/aspect-ratio"),
   ],
};
