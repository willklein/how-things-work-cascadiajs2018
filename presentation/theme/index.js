import createTheme from '../../createTheme'

const colors = {
  primary: '#95FDE4', // sea green
  secondary: '#71C78A', // green
  tertiary: '#3255B1', // blue
  quaternary: '#6446AA' // purple
}

export default createTheme(
  colors,
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  }
)
