import React from 'react'; 

function HomepageImage() {
    const url = 'https://www.betacalendars.com/uploads/2019/01/January-2020-Calendar.jpg';
    return (
        <img src={url} style ={{width: 650}} alt='Calendar' />
    );
}

export default HomepageImage;

