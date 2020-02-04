module.exports = {
  gold: (request, response) => {
    if (request.session) {
      console.log('sup');
      if (!request.session.gold) {
        request.session.gold = 0;
      }
    }
    const gold = request.session.gold;
    console.log(gold);
    response.json(gold);
  },
};
