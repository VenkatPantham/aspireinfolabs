import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  // Customizing the typography. As mentioned in the style guide, Playfair-Display & Gotham.
  //  Customizing the palette. Colors as mentioned in the style guide.
  palette: {
    primary: {
      main: "#000079", //dark blue
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#edd107", //yellow
    },
    neutral: {
      main: "#0468bf", //blue
    },
    info: {
      main: "#02d2de", //light blue
    },
    highlight: {
      main: "#f29f05", //orange
    },
    lightBackground: {
      main: "#f0e5d0", //light pink
    },
    background: {
      default: "#ffffff", // overriding default background color
    },
  },

  // Customizing the spacing. As mentioned in the style guide.
  // spacing: 24,

  // removing default box-shadows
  shadows: ["none"],

  // Customizing components according to the style guide.
  overrides: {
    MuiContainer: {
      root: {
        padding: 0,
      },
    },
  },

  props: {
    MuiContainer: {
      maxWidth: false,
    },
    MuiLink: {
      underline: "none",
    },
  },
});

theme.typography.h1 = {
  // fontSize: "100px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "2.75rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "3.25rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "4.25rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "6.25rem",
  },
  fontFamily: "Playfair Display, serif",
  lineHeight: theme.typography.h1.lineHeight,
};
theme.typography.h2 = {
  // fontSize: "85px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "2.75rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "3.25rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "5.31rem",
  },
  fontFamily: "Playfair Display, serif",
  lineHeight: theme.typography.h2.lineHeight,
};
theme.typography.h3 = {
  // fontSize: "60px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "2.4rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "3.75rem",
  },
  fontFamily: "Playfair Display, serif",
  lineHeight: theme.typography.h3.lineHeight,
};
theme.typography.h4 = {
  // fontSize: "45px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "2.81rem",
  },
  fontFamily: "Playfair Display, serif",
  lineHeight: theme.typography.h4.lineHeight,
};
theme.typography.h5 = {
  // fontSize: "40px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "2.5rem",
  },
  fontFamily: "Playfair Display, serif",
  lineHeight: theme.typography.h5.lineHeight,
};
theme.typography.h6 = {
  // fontSize: "35px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.65rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "2.19rem",
  },
  lineHeight: theme.typography.h6.lineHeight,
};
theme.typography.body1 = {
  // fontSize: "30px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "1.86rem",
  },
  lineHeight: theme.typography.body1.lineHeight,
};
theme.typography.subtitle1 = {
  // fontSize: "25px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "0.95rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "1.56rem",
  },
  lineHeight: theme.typography.subtitle1.lineHeight,
};
theme.typography.body2 = {
  // fontSize: "20px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "0.75rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "1.26rem",
  },
  lineHeight: theme.typography.body2.lineHeight,
};
theme.typography.subtitle2 = {
  fontSize: "16px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "1rem",
  },
  lineHeight: theme.typography.body2.lineHeight,
};
theme = responsiveFontSizes(theme, { factor: 2 });

export { theme };
