// functions/memer.js
const nodeyourmeme = require('nodeyourmeme');

exports.handler = async (event) => {
    const { searchTerm, category } = event.queryStringParameters;

    try {
        let memes;
        if (searchTerm) {
            memes = await nodeyourmeme.search(searchTerm);
        } else if (category) {
            memes = await nodeyourmeme.search(category); // Adjust according to your API if needed
        } else {
            memes = await nodeyourmeme.random();
        }

        return {
            statusCode: 200,
            body: JSON.stringify(memes),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch memes' }),
        };
    }
};
