import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function DarkLayout({children}) {
  return(
    <>
      <Header isDark = {true}/>
        {children}
      <Footer
        content={{
          links: [
            { name: "services", url: "#" },
            { name: "work", url: "#" },
            { name: "value", url: "#" },
            { name: "contact", url: "#" },
          ],
        }}
      />
    </>
  );
}
