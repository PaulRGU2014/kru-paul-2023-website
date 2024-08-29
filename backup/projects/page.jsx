"use client";


// get text api from https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/677261'

import React, { useEffect, useState } from 'react';


export default function Resume() {
    const [data, setData] = useState('');

    const [loading, setLoading] = useState(true);    


    useEffect(() => {
        fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/677261')
            .then(response => response.text())
            .then(data => {
                setData(data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch(error => {
                console.error('Error fetching the string:', error);
            });
    }
    , []);

    //convert each character to <li> element
    const listItems = data.split('').map((char, index) => {
        return <li key={index}>{char}</li>;
    });

    //create a component that has typing effect on the list
    const TypingEffect = () => {
        const [index, setIndex] = useState(0);
        useEffect(() => {
            const interval = setInterval(() => {
                setIndex(prevIndex => prevIndex + 1);
            }, 500);
            return () => clearInterval(interval);
        }, []);
        return <ul>{listItems.slice(0, index)}</ul>;
    }

    
    return (
        <div>
            <div className="loading">
                <div className="loading__content">
                    {!!loading && <div className="loading__content__title">Loading...</div>}
                    {!loading && <TypingEffect />}
                </div>
            </div>
        </div>
    );

}