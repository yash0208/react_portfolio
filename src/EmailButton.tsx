import React from 'react';

const EmailButton = () => {
    const handleEmailClick = () => {
        var email = 'recipient@example.com';
        var subject = 'Hello';
        var body = 'This is the body of the email';

        var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        window.location.href = mailtoLink;
    };

    return (
        <button onClick={handleEmailClick}>
            Send Email
        </button>
    );
};

export default EmailButton;