/* eslint-disable no-undef */
module.exports = (req, res, next) => {
    console.log("received request to "+ req.path);
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

    if (req.method === 'POST' && req.path === '/loans') {

        const { id } = req.body;

        if (id) {
            return res.status(200).json({
                msg: `Loan ${id} created successfully`,
            });
        } else {
            return res.status(400).json({
                error: 'No id provided in the request body',
            });
        }
    }

    
    if (req.method === 'POST' && req.path === '/login') {

        const { user } = req.body;

        return res.status(200).json({
            loginType: user === "curator@greenfield.com" ? "curator" : "member",
            error: null,
            session: user === "curator@greenfield.com" ? {
                userName: "curator"
            } : {
                userName: "Elena Moreno"
            }
        });

    }


    // For all other requests, just continue as normal
    next();
};