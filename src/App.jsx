import { useSelector } from 'react-redux';
import MyRoutes from './routes/index'
import themes from './theme/index'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import NavigationScroll from './config/navigationScroll';


function App() {

  const customization = useSelector((state) => state.customization);


  return (
    <StyledEngineProvider injectFirst>
       <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
              <MyRoutes />
          </NavigationScroll>
        </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App;