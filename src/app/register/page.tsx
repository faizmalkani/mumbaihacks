// app/register/page.tsx

import Script from 'next/script'; 
import React from 'react';

const MumbaiHacksRegistrationPage = () =>
{
    return (
        <div style={{ margin: 0, height: '100vh', width: '100%', overflow: 'hidden', position: 'relative' }}>

            <iframe
                data-tally-src="https://tally.so/r/VLEa2g"
                width="100%"
                height="100%"
                title="Register for MumbaiHacks 2025!"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    border: 0,
                }}
            />

            <Script
                src="https://tally.so/widgets/embed.js"
                strategy="afterInteractive"
            />
        </div>
    );
};

export default MumbaiHacksRegistrationPage;