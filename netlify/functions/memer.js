// functions/memer.js
const nodeyourmeme = require('nodeyourmeme');

exports.handler = async (event) => {
    const { searchTerm, category } = event.queryStringParameters;

    try {
        let memes;
        memes = await nodeyourmeme.random()

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
