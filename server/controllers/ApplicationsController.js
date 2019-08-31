
//zapisywanie zgłoszeń użytkowników, np rejestracja
exports.store = (req, res) => {
    req.flash('form', req.body.name +', siemka!');
    res.redirect('/');
};
