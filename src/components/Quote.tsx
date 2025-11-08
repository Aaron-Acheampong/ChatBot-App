import {useState, useEffect} from 'react'
import { useErrorBoundary } from 'react-error-boundary';

import ClockClasses from './Quote.module.css';

import data from '../quotes.json';

type Quotestype = {
    quote: string,
    author: string
}


function Quote() {

    const [quotes, setQuotes] =useState<Quotestype[]>([]);
    const [randomElement, setRandomElement] = useState<Quotestype>({quote: "Brilliant thinking is rare, but courage is in even shorter supply than genius", author: "Peter Thiel"});
    const { showBoundary } = useErrorBoundary();

    // const BASE_URL = '../quotes.json'


    // const abortControllerRef = useRef<AbortController | null>(null);

    const getQuote = async () => {
        //abortControllerRef.current?.abort();
        //abortControllerRef.current = new AbortController();
        console.log(data)

        try {
            // const response = await fetch(BASE_URL, { signal: abortControllerRef.current?.signal});
            //const parsedQuotes = await data.json();
           
            await setQuotes(data.quotes);
            console.log(quotes)
            

        } catch (e: any) {
           /* if(e.name === 'AbortError') {
                console.log('Aborted request');
                return;
            } */
           if (e instanceof Error)
                showBoundary(e);
        } 

        
    };

    const handleClick: React.MouseEventHandler<HTMLInputElement> = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(quotes && quotes.length > 0){
                const randomIndex = Math.floor(Math.random() * quotes.length);
                setRandomElement(quotes[randomIndex]);
            }
    }

    useEffect(() => {
        getQuote();
    }, [])

    useEffect(() => {
        const myInterval = setTimeout(() => {
            if(quotes && quotes.length > 0){
                const randomIndex = Math.floor(Math.random() * quotes.length);
                setRandomElement(quotes[randomIndex]);
            }

        }, 60 *1000);

        return () => {
            clearTimeout(myInterval);
        }
    })

    

  return (
    <div className={ClockClasses['quote-container']}>
        <h1>"{randomElement.quote}"</h1>
        <h2>{randomElement.author}</h2>
        <button onClick={handleClick}>Get Quote</button>
    </div>
  )
}

export default Quote
