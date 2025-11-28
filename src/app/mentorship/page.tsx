// app/register/page.tsx

import React from 'react';

const MumbaiHacksMentorshipPage = () =>
{
    return (
        <div style={{ margin: 0, height: '100vh', width: '100%', overflow: 'hidden', position: 'relative' }}>

            <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appsllt5GcLaY3kXT/pagWsBV4uoxHgJDko/form"
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

        </div>
    );
};

export default MumbaiHacksMentorshipPage;