const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3001;
const BASE = '/api';
const IMAGE_URL = '/static/images';

app.use(cors({
    origin: ['https://ryanblakeman.com', 'https://rblakeman.github.io/', 'http://localhost:3000']
}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get(`${BASE}`, (req, res) => {
    res.send({ express: 'Hello World!' });
});

app.get(`${BASE}/events`, (req, res) => {
    const events = [
        {
            title: 'GDC 2019',
            date: 'March 2019',
            contents: 'Attended GDC for two days to listen and learn at sessions, walk and talk in the expo, but most importantly laugh and play some unique and inspiring games. My colleague captured this very candid shot of me in between the new technology booths.',
            image: `${IMAGE_URL}/gdc_2019.jpg`
        },
        {
            title: 'University Graduation',
            date: 'May 2018',
            contents: 'Walked across the stage to receive my B.S. along with several colleagues. Best part of the day? Hearing my name pronounced correctly.',
            image: `${IMAGE_URL}/graduation.jpg`
        },
        {
            title: 'Senior Capstone',
            date: 'May 2018',
            contents: 'Presented with my team in front of faculty and visitors. Followed up with a poster session, and a live demo. Learn about the project under the Games tab.',
            image: `${IMAGE_URL}/capstone.jpg`
        },
        {
            title: 'GDC 2018',
            date: 'March 2018',
            contents: 'Returned back a second year using the Student Expo Pass.',
            image: `${IMAGE_URL}/gdc_2018.jpeg`
        },
        {
            title: 'UROC Summer Research Symposium 2017',
            date: 'August 2017',
            contents: `We presented our final research during UROC's Summer Research Symposium in the Tanimura & Antle Library. Check out my Research tab for more info and the poster.`,
            image: `${IMAGE_URL}/uroc_symposium_2017.jpg`
        },
        {
            title: 'GameJam 2017',
            date: 'June 2017',
            contents: 'Set up and assisted Dr. Krzysztof Pietroszek with the Summer GameJam in the Joel & Dena Gambord BIT Building.',
            image: `${IMAGE_URL}/gamejam_2017.jpg`
        },
        {
            title: 'GDC 2017',
            date: 'March 2017',
            contents: 'Visited the Game Developers Conference this year thanks to the student Expo Pass.',
            image: `${IMAGE_URL}/gdc_2017.jpg`
        }
    ];

    res.send({ events });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
