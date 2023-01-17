const healthCheck = (req, res) => {
    console.log('200: Success! (Console)');
    res.send('200: Success!');
}

module.exports = {healthCheck}