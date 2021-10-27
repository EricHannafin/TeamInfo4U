/* GET 'login' page */
const login = function (req, res) {
  res.render("login-page");
};

/* GET 'register-page' */
const register = function (req, res) {
  res.render("register-page");
};

/* GET 'team info' page */
const teamInfo = function(req, res){
  res.render('teamInfo-page', {
    title: 'TeamInfor4U',
    pageHeader: {
      title: 'TeamInfo4U',
      strapline: 'A bit of information about your favourite team'
    },
    sidebar: "Looking for a bit more information about premier league teams? TeamInfo4U will show you the current manager, nickname, top scorer, stadium, website and premier league titles for all premier league clubs",
    teams: [{
        name: 'Arsenal',
        founded: 'Founded: 1886',
        manager: 'Manager: Mikel Arteta',
        nickname: 'Nickname: The Gunners',
        topScorer: 'Top Scorer: Thierry Henry',
        stadium: 'Stadium: Emirates Stadium',
        website: 'Website: www.arsenal.com',
        leagues: 'League Titles: 13'
    }, {
        name: 'Aston Villa',
        founded: 'Founded: 1874',
        manager: 'Manager: Dean Smith',
        nickname: 'Nickname: The Villans',
        topScorer: 'Top Scorer: Billy Walker',
        stadium: 'Stadium: Villa Park',
        website: 'Website: www.avfc.com',
        leagues: 'League Titles: 7'
    }, {
        name: 'Brentford',
        founded: 'Founded: 1889',
        manager: 'Manager: Thomas Frank',
        nickname: 'Nickname: The Bees',
        topScorer: 'Top Scorer: Ivan Tony',
        stadium: 'Stadium: Brentford Community Stadium',
        website: 'Website: www.brentfordfc.com',
        leagues: 'League Titles: 0'
    }, {
        name: 'Brighton & Hove Albion F.C',
        founded: 'Founded: 1901',
        manager: 'Manager: Graham Potter',
        nickname: 'Nickname: Seagulls',
        topScorer: 'Top Scorer: Tommy Cook',
        stadium: 'Stadium: American Express Community Stadium',
        website: 'Website: www.brightonandhovealbion.com',
        leagues: 'League Titles: 0'
    }, {
        name: 'Burnley F.C',
        founded: 'Founded: 1882',
        manager: 'Manager: Sean Dyche',
        nickname: 'Nickname: The Clarets',
        topScorer: 'Top Scorer: George Beel',
        stadium: 'Stadium: Turf Moor',
        website: 'Website: www.burnleyfootballclub.com',
        leagues: 'League Titles: 2'
},    {
        name: 'Chelsea F.C',
        founded: 'Founded: 1905',
        manager: 'Manager: Thomas Tuchel',
        nickname: 'Nickname: Blues',
        topScorer: 'Top Scorer: Frank Lampard',
        stadium: 'Stadium: Stamford Bridge',
        website: 'Website: www.chelseafc.com',
        leagues: 'League Titles: 5'
},    {
        name: 'Crystal palace',
        founded: 'Founded: 1905',
        manager: 'Manager: Patrick Viera',
        nickname: 'Nickname: The Eagles',
        topScorer: 'Top Scorer: Peter Simpson',
        stadium: 'Stadium: Selhurst Park',
        website: 'Website: www.cpfc.com',
        leagues: 'League Titles: 0'
},    {
        name: 'Everton F.C',
        founded: 'Founded: 1878',
        manager: 'Manager: Rafael Benitez',
        nickname: 'Nickname: The Toffees',
        topScorer: 'Top Scorer: Dixie Dean',
        stadium: 'Stadium: Goodison Park',
        website: 'Website: www.evertonfc.com',
        leagues: 'League Titles: 9'
},    {
       name: 'Leeds United',
       founded: 'Founded: 1919',
       manager: 'Manager: Marcelo Bielsa',
       nickname: 'Nickname: The Whites',
       topScorer: 'Top Scorer: Peter Lorimer',
       stadium: 'Stadium: Elland Road',
       website: 'Website: www.leedsunited.com',
       leagues: 'League Titles: 3'
},    {
       name: 'Leicester City F.C',
       founded: 'Founded: 1884',
       manager: 'Manager: Brendan Rodgers',
       nickname: 'Nickname: The Foxes',
       topScorer: 'Top Scorer: Jamie Vardy',
       stadium: 'Stadium: King Power Stadium',
       website: 'Website: www.lcfc.com',
       leagues: 'League Titles: 1'
},    {
       name: 'Liverpool',
       founded: 'Founded: 1892',
       manager: 'Manager: Jurgen Klopp',
       nickname: 'Nickname: The Reds',
       topScorer: 'Top Scorer: Ian Rush',
       stadium: 'Stadium: Anfield',
       website: 'Website: www.liverpoolfc.com',
       leagues: 'League Titles: 19'
},    {
       name: 'Manchester City',
       founded: 'Founded: 1880',
       manager: 'Manager: Pep Guardiola',
       nickname: 'Nickname: The Sky Blues',
       topScorer: 'Top Scorer: Sergio Aguero',
       stadium: 'Stadium: The Etihad',
       website: 'Website: www.mancity.com',
       leagues: 'League Titles: 7'
},    {
       name: 'Manchester United',
       founded: 'Founded: 1878',
       manager: 'Manager: Ole Gunnar Solkjaer',
       nickname: 'Nickname: The Red Devils',
       topScorer: 'Top Scorer: Wayne Rooney',
       stadium: 'Stadium: Old Trafford',
       website: 'Website: www.manutd.com',
       leagues: 'League Titles: 20'
},    {
       name: 'Newcastle United',
       founded: 'Founded: 1892',
       manager: 'Manager: Steve Bruce',
       nickname: 'Nickname: The Magpies',
       topScorer: 'Top Scorer: Alan Shearer',
       stadium: 'Stadium: St. James Park',
       website: 'Website: www.nufc.com',
       leagues: 'League Titles: 4'
},    {
       name: 'Norwich City',
       founded: 'Founded: 1880',
       manager: 'Manager: Daniel Farke',
       nickname: 'Nickname: Canaries',
       topScorer: 'Top Scorer: John Deehan',
       stadium: 'Stadium: Carrow Road',
       website: 'Website: www.canaries.co.uk',
       leagues: 'League Titles: 0'
},    {
       name: 'Southampton',
       founded: 'Founded: 1885',
       manager: 'Manager: Ralph Hasenhuttl',
       nickname: 'Nickname: The Saints',
       topScorer: 'Top Scorer: Matt Le Tissier',
       stadium: 'Stadium: Saint Marys Stadium',
       website: 'Website: www.southamptonfc.com',
       leagues: 'League Titles: 0'
},    {
       name: 'Tottenham Hotspur',
       founded: 'Founded: 1882',
       manager: 'Manager: Nunu Espirito Santo',
       nickname: 'Nickname: Spurs',
       topScorer: 'Top Scorer: Jimmy Greaves',
       stadium: 'Stadium: White Hart Lane',
       website: 'Website: www.tottenhamhotspur.com',
       leagues: 'League Titles: 0'
},    {
       name: 'Watford',
       founded: 'Founded: 1880',
       manager: 'Manager: Claudio Ranieri',
       nickname: 'Nickname: The Orns',
       topScorer: 'Top Scorer: Ismalia Sarr',
       stadium: 'Stadium: Vicarage Road Stadium',
       website: 'Website: www.watfordfc.com',
       leagues: 'League Titles: 0'
},    {
       name: 'West Ham United F.C',
       founded: 'Founded: 1880',
       manager: 'Manager: David Moyes',
       nickname: 'Nickname: The Hammers',
       topScorer: 'Top Scorer: Vic Watson',
       stadium: 'Stadium: London Stadium',
       website: 'Website: www.whufc.com',
       leagues: 'League Titles: 0'
},    {
      name: 'Wolverhampton Wanderers F.C',
      founded: 'Founded: 1877',
      manager: 'Manager: Bruno Lage',
      nickname: 'Nickname: The Dingles',
      topScorer: 'Top Scorer: Johnny Hancocks',
      stadium: 'Stadium: Molineux Stadium',
      website: 'Website: www.wolves.co.uk',
      leagues: 'League Titles: 11'
}]
  });
};


module.exports = {
  login,
  register,
  teamInfo,
};
