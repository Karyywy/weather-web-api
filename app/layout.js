import Image from 'next/image';
import React from 'react';

export default function WeatherAppLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}


