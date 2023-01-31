const healthCheck = (req, res) => {
    console.info('200: Success! (Console)');
    res.status(200).send('200: Success!');
}

module.exports = {healthCheck}