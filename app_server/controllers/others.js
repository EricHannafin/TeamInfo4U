const about = function(req, res){
  res.render('generic-text', {
    title: 'About TeamInfo4U',
    content: 'TeamInfo4U is an application that displays some useful information for every team in the english premier league.'
  });
};

module.exports = {
  about
};