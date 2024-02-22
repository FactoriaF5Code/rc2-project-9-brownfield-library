/* eslint-disable no-undef */
module.exports = (req, res, next) => {

    if (req.method === 'POST' && req.path === '/books') {
        
        const { id } = req.body;

        if (id) {
            // Modify the response or perform some action based on the id
            return res.status(200).json({
                msg: `Book ${id} saved successfully`,
            });
        } else {
            // If no id is provided in the request, you might want to handle it differently
            return res.status(400).json({
                error: 'No id provided in the request body',
            });
        }
    }
    // For all other requests, just continue as normal
    next();
};