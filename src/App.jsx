import './App.css'
import { useSelector } from 'react-redux';
import MyRoutes from './config/routes/index'
import themes from './config/themes/index'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import NavigationScroll from './config/routes/NavigationScroll';


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