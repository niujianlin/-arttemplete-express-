const {User} = require('../../model/user');

module.exports = async (req, res) => {
    // res.send('ok')
    await User.findOneAndDelete({_id:req.query.id})
    res.redirect('/admin/user');
}