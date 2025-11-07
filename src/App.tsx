import { useState} from 'react'
import { ErrorBoundary } from 'react-error-boundary';

import ChatBox from './components/ChatBox';

import AppClasses from './App.module.css'
import Clock from './components/Clock';
import Quote from './components/Quote';


function App() {

  

  const [top, setTop] = useState<boolean>(false)

  const switchTop = (): void => {
    setTop(prev => !prev);
  };

  return (

    <div className={AppClasses["main-container"]}>

      <Clock />
             
      <div className={AppClasses["app-container"]} >

        <div className={AppClasses.header}>
          <span className={AppClasses.headtxt} onClick={switchTop}> {top ? 'bottom'  : 'top'}</span>
        </div>

        <ChatBox top={ top } />

      </div>

      <ErrorBoundary fallback={<div>Something went wrong! Please try again.</div>}>
          <Quote />
      </ErrorBoundary>

      
    </div>
        );
}

export default App
