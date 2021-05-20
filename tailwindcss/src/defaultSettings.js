module.exports = {
  config: {
    darkMode: false,
    theme: {
      colors: {
        'current': 'currentColor',
        'transparent': 'transparent',
        'black-alpha': 'rgba(0,0,0,.25)',

        'base-1': '#FFFFFF',
        'base-2': '#F8F8F9',
        'base-3': '#E8E9EB',
        'base-4': '#D5D7DA',

        'inverted-1': '#20221B',
        'inverted-2': '#83888E',
        'inverted-3': '#E8E9EB',
        'inverted-4': '#F8F8F9',

        'on-primary': '#FFFFFF',
        'on-sucess': '#FFFFFF',
        'on-danger': '#FFFFFF',
        'on-warning': '#FFFFFF',

        'on-inverted': '#FFFFFF',
        'on-base': '#142032',
        'on-base-2': '#7C828A',
        'on-base-3': '#D0D2D6',

        'primary-light': '#F2F8E8',
        'primary': '#9CCB3B',
        'primary-dark': '#86B623',
        'primary-bold': '#749335',

        'success-light': '#F3F8E8',
        'success': '#9CCB3B',
        'success-dark': '#86B623',
        'success-bold': '#749335',

        'danger-light': '#FCF1EE',
        'danger': '#DD4A2C',
        'danger-dark': '#C43F24',
        'danger-bold': '#AA341C',

        'warning-light': '#FBF5E5',
        'warning': '#FFC20E',
        'warning-dark': '#D99D09',
        'warning-bold': '#B37B06',

        'secondary-light': '#F4FAFD',
        'secondary': '#B9DEF0',
        'secondary-dark': '#5BA2C4',
        'secondary-bold': '#5BA2C4',

        'orange-promax': '#FF4007',

        'google': '#EA4335',
        'google-dark': '#D0382C',
        'google-bold': '#B42E23',
        'google-red': '#FF4C4C',
        'google-blue': '#368DF7',
        'google-purple': '#8914CC',
        'google-green': '#8BC34A',
        'google-yellow': '#F4B400',

        'card-stroke': '#CED4D8',
        'card-stroke-2': '#A3AAB5',
        'card-shadow': '#E1E4E7'
      },
      extend: {
        boxShadow: {
          outline: '0 0 0 2px rgba(156,203,59,.5)',
          card: '0px 15px 30px rgba(0, 0, 0, 0.1)'
        },
        letterSpacing: {
          '3': '-0.01875rem',
          '4': '-0.025rem',
          '5': '-0.03125rem',
        },
        width: {
          '315': '315px',
          '350': '350px',
          '410': '410px',
        },
        maxWidth: {
          '1/2': '50%',
          '440': '440px',
        },
        maxHeight: {
          '280': '280px',
          '460': '460px',
        },
        margin: {
          '11px': '11px',
        },
        spacing: {
          '7': '1.875rem',
          '13': '3.125rem',
        },
        fontSize: {
          'f1': '3rem',
          'f2': '2.25rem',
          'f3': '1.5rem',
          'f4': '1.25rem',
          'f5': '1rem',
          'f6': '.875rem',
          'f7': '.75rem',
          'f8': '.625rem',
        },
        fontFamily: {
          'sans': 'Open Sans, sans-serif',
        },
        zIndex: {
          '1': '1',
          '2': '2',
        },
        listStyleType: {
          alpha: 'lower-alpha',
        },
        transitionProperty: {
          'width': 'width',
        }
      },
      fontWeight: {
        hairline: false,
        thin: false,
        light: false,
        normal: 400,
        medium: false,
        semibold: 600,
        bold: 700,
        extrabold: false,
        black: false,
      }
    },
    variants: {
      extend: {
        ringWidth: ['hover'],
      }
    },
    plugins: []
  }
}
