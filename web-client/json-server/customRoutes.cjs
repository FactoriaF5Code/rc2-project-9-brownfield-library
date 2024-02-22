/* eslint-disable no-undef */
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/books') {
        
        const { id } = req.body;

        if (id) {
            return res.status(200).json({
                msg: `Book ${id} saved successfully`,
            });
        } else {
            return res.status(400).json({
                error: 'No id provided in the request body',
            });
        }
    }

    if (req.method === 'POST' && req.path === '/members') {
        
        const { id } = req.body;

        if (id) {
            return res.status(200).json({
                msg: `Member ${id} created successfully`,
            });
        } else {
            return res.status(400).json({
                error: 'No id provided in the request body',
            });
        }
    }

    



    // For all other requests, just continue as normal
    next();
};