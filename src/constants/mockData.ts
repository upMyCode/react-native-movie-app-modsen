import generateSeats from '@helpers/generateSeats';
import { formatDateToYYYYMMDD } from '@helpers/workWithDate';

const MOCK_YOUTUBE_ID = '9RlazEFbLo4';

export const mockFilmSessions = [
  {
    id: '1',
    coast: 15,
    timeStart: '12:00',
    timeEnd: '19:00',
    date: formatDateToYYYYMMDD(new Date()),
    cinema: 'China City',
    seats: generateSeats(7, 8),
  },
  {
    id: '2',
    coast: 45,
    timeStart: '18:30',
    timeEnd: '20:30',
    date: formatDateToYYYYMMDD(new Date()),
    cinema: 'XMovie',
    seats: generateSeats(7, 8),
  },
  {
    id: '3',
    coast: 99,
    timeStart: '13:30',
    timeEnd: '16:30',
    date: formatDateToYYYYMMDD(new Date()),
    cinema: 'XMovie',
    seats: generateSeats(7, 8),
  },
];

export const USER_ID = '9q7LeBH0WDPJ4FC2rl55ZLfN07O2';

export const MOCK_TOP_100_MOVIE = [
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: [
      'Mario Puzo (screenplay by)',
      'Francis Ford Coppola (screenplay by)',
    ],
    imdbid: 'tt0068646',
  },
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: [
      'Mario Puzo (screenplay by)',
      'Francis Ford Coppola (screenplay by)',
    ],
    imdbid: 'tt0068646',
  },
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: [
      'Mario Puzo (screenplay by)',
      'Francis Ford Coppola (screenplay by)',
    ],
    imdbid: 'tt0068646',
  },
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: [
      'Mario Puzo (screenplay by)',
      'Francis Ford Coppola (screenplay by)',
    ],
    imdbid: 'tt0068646',
  },
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    rating: '9.3',
    id: 'top1',
    year: 1994,
    image:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailer: 'https://www.youtube.com/embed/NmzuHjWmXOc',
    genre: ['Drama'],
    director: ['Frank Darabont'],
    writers: [
      "Stephen King (based on the short novel 'Rita Hayworth and the Shawshank Redemption' by)",
      'Frank Darabont (screenplay by)',
    ],
    imdbid: 'tt0111161',
  },
  {
    rank: 2,
    title: 'The Godfather',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg',
    rating: '9.2',
    id: 'top2',
    year: 1972,
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailer: 'https://www.youtube.com/embed/sY1S34973zA',
    genre: ['Crime', 'Drama'],
    director: ['Francis Ford Coppola'],
    writers: [
      'Mario Puzo (screenplay by)',
      'Francis Ford Coppola (screenplay by)',
    ],
    imdbid: 'tt0068646',
  },
];

export const movieInfoDate = {
  imdbid: 'tt7286456',
  numVotes: 849733,
  people: [
    {
      category: 'producer',
      characters: null,
      job: 'producer',
      peopleid: 'nm0177896',
    },
    {
      category: 'actor',
      characters: ['Arthur Fleck'],
      job: null,
      peopleid: 'nm0001618',
    },
    {
      category: 'actress',
      characters: ['Sophie Dumond'],
      job: null,
      peopleid: 'nm5939164',
    },
    {
      category: 'actress',
      characters: ['Penny Fleck'],
      job: null,
      peopleid: 'nm0175814',
    },
    {
      category: 'director',
      characters: null,
      job: null,
      peopleid: 'nm0680846',
    },
    {
      category: 'writer',
      characters: null,
      job: 'written by',
      peopleid: 'nm0798788',
    },
    {
      category: 'writer',
      characters: null,
      job: 'based on characters created by',
      peopleid: 'nm0004170',
    },
    {
      category: 'writer',
      characters: null,
      job: 'based on characters created by',
      peopleid: 'nm0277730',
    },
    {
      category: 'writer',
      characters: null,
      job: 'based on characters created by',
      peopleid: 'nm1047603',
    },
    {
      category: 'actor',
      characters: ['Murray Franklin'],
      job: null,
      peopleid: 'nm0000134',
    },
  ],
  plotSummary:
    "\n            The story takes place in Gotham City, 1981.Arthur Fleck (Joaquin Phoenix) works as a clown-for-hire for a company called Ha-Ha's. He struggles with severe depression personally but finds some form of optimism in performing for others and trying to make people laugh. He is tasked with advertising a store by dancing and waving a sign around. On one such occasion, the sign gets snatched by a group of punk teens, forcing Arthur to chase them into an alley. They smash the sign against his face and proceed to mercilessly kick him while he's down.In this era, Gotham is struggling with crime, unemployment, and poverty. Arthur visits a social worker for his medication, as well as his ongoing mental health issues. On the bus ride home, a small child looks at Arthur. He makes silly faces that amuse the boy, but his mother tells Arthur to leave him alone. Arthur begins to laugh hysterically and uncontrollably. When the mother questions him, he hands her a card that explains that he has a mental condition that causes him to laugh the way that he does.Arthur returns home to a high-rise apartment project, where he lives with his ailing mother, Penny (Frances Conroy). After dinner, they sit and watch a TV talk show with host Murray Franklin (Robert DeNiro). Arthur imagines himself being on the show and getting Murray's attention. In his fantasy, Arthur charms the audience and Murray by telling them that he takes care of his mother. Murray relates to Arthur and invites him up on stage in front of everyone, where they share a familial embrace. It is revealed that Penny used to work for Thomas Wayne (Brett Cullen) and is obsessed with the millionaire and has been currently writing to him to try and better their living situation.At Ha-Ha's, Arthur is given a gun for protection by his co-worker Randall (Glenn Fleschler) after he hears about the mugging incident. Arthur is both reluctant and relieved to receive such a gift as firearms are outlawed at work but soon finds his confidence growing after receiving the weapon. However, soon after this, he is confronted by his cold and unfeeling boss, who reprimands him for losing the sign and takes the cost of it out of his pay. Arthur responds only by smiling bitterly.Arthur meets and becomes infatuated with one of his neighbors, a single mother named Sophie Dumond (Zazie Beetz). She speaks to him politely about relating issues that he can relate to. However, while trying to make an impression with her, he appears awkward and weird around her. At one point, he spends his day following her. Later, she comes by his apartment and asks if he was following her, and he admits that he was, but she doesn't seem put off by it. He invites her to a stand-up comedy show that he is performing at. She is hesitant but is won over by his charm and sense of humor. Arthur watches comedians perform to help him gain some insight into the craft, but feels more awkward and out of place as his over-the-top laughter is not genuine.Arthur goes to the comedy club for his performance. His nervousness consumes him and, as a coping mechanism, unintentionally finds himself laughing so hard that he can barely speak. He then begins going off into his routine, which isn't very funny. Sophie appears to be in the audience... the only person who is laughing at Arthur's jokes. This gives him the comfort he needs to continue to joke despite his inner torment and turmoil.Arthur later goes to a children's hospital to entertain them as a clown. He brought his gun with him, and it falls out on the floor. Arthur's boss later chews him out for this. Arthur pleads for a second chance, but his boss refuses and fires him on the spot. To top things off, Randall throws Arthur under the bus by claiming that Arthur got the gun himself. On the subway train ride home from Ha-Ha's in full clown getup, Arthur spots three drunk young Wall Street types working for Wayne Enterprises harassing a woman. Arthur starts laughing unintentionally and draws the attention of the men, while the woman wisely flees from that car. The men approach Arthur and mock him and his laughter before they start to beat him. Arthur fights back in self-defense, but they team up, and relentlessly beat him to the floor. Having had enough, Arthur then pulls out his gun and shoots two of them dead in self-defense before following the last guy out of the train and murdering him on the stairs.In shock over what he just did, Arthur retreats into a nearby public men's room. After a moment of frantic contemplation, he finds a force rising within him, and he begins to dance by himself. At this moment, he sees himself in the dirty mirror as a battered and smeared and yet powerful clown and begins to embrace it. He hides the gun and then returns to the apartment where he meets and kisses Sophie for the first time.The news of the three murders spreads, with some seeing it as an attack on the wealthy, while others support the act. Thomas Wayne speaks out and condemns it, labeling the lower class as \"clowns,\" which becomes a symbol they readily embrace. The next day, Arthur cleans out his locker at Ha Ha's but not before confronting Randall about betraying him and breaking the time punching machine. He then leaves, feeling high-spirited and free. News reports show clown rioters protesting through the city and wreaking trouble, condemning the higher privileged. Arthur sees that he has inadvertently caused this and begins to see his true potential, which makes him genuinely delighted.Arthur later finds one of Penny's letters to Thomas, which indicates that Arthur is Thomas' son. Arthur goes to Wayne Manor, where he meets young Bruce Wayne (Dante Pereira-Olson). After performing a magic trick for Bruce, he sticks his hands through the gate and forces Bruce to smile, realizing deep within that they may or may not be brothers. However, Alfred (Douglas Hodge) comes to intervene and tell Arthur to leave. Arthur mentions his mother and her involvement with Thomas. Alfred says he remembers Penny, but that she was lying to him. Arthur attacks and nearly strangles Alfred through the bars but then notices that Bruce is watching. Arthur then gets hold of himself and flees the Wayne premises.That evening, Arthur finds Thomas at a public art theater event. Arthur infiltrates the theater by impersonating an usher. He follows Thomas Wayne into a men's room and tries to confront him with the potential of him being his father. Arthur mentions Penny, whom Thomas also remembers. He says she was delusional and that there's no way Arthur could be his son. Thomas also explains that Penny never told Arthur that he was adopted, which Arthur strongly rejects before uncontrollably laughing in Thomas's face. Thomas, unaware of Arthur's condition, becomes defensive and punches Arthur in the face before having the man is thrown out of the building. Arthur returns home, where he tortures himself by slamming his head on the refrigerator in a fit of depression and longing.Two police detectives, Burke (Shea Wigham) and Garrity (Bill Camp) go to Arthur's apartment to question him on the subway murders due to the word that the suspect was wearing clown make-up, and they know Arthur lost his job earlier that day. Arthur denies any involvement and gets the detectives to leave. Not long after, Penny falls ill and is hospitalized. Sophie sits by Arthur as he tends to his mother. In the hospital, Arthur sees that Murray's show is playing a clip from his stand-up routine, but he is hurt to see that Murray only played it to mock Arthur.Arthur later receives a phone call from a rep for Murray's show. He is invited to appear as a guest, which Arthur reluctantly accepts. After studying other interviews on the comedy show, Arthur decides to commit suicide in front of the live audience, thinking it will make them laugh.Seeking hard proof, Arthur goes to Arkham Asylum and speaks to a clerk, Carl (Brian Tyree Henry), who has a file on Penny. When Carl says he can't give Arthur the info he wants, Arthur snatches the file and runs away to read it. Once away and hidden in a stairwell, Arthur opens the documents and reads them, finding that Thomas was telling the truth... according to the documents. The reality is that Penny adopted Arthur after he was found abandoned, and she abused him, tying him to a radiator and beating him alongside her abusive boyfriend. One part of the file mentions Arthur having a head injury, which is most likely what caused his laughing condition. Arthur returns to the hospital and tells Penny that he thought his life was a tragedy, but he sees it's a \"fucking comedy.\" With that, he smothers Penny to death.Arthur goes back home and breaks into Sophie's apartment. She sees him and is terrified, asking him to leave for the sake of her daughter. Arthur asks her if she has ever had \"a really bad day,\" to which she replies that she doesn't even know him. Through this, it is revealed that every other moment featuring Sophie was just in Arthur's head. A broken and frustrated Arthur apologizes for his intrusion and leaves Sophie alone, storming out of her apartment.Arthur starts to get ready for his appearance on Murray's show and paints his face white. He is visited in his apartment by Randall and another former co-worker, a dwarf named Gary (Leigh Gill). They offer condolences after they hear about Penny's death, but then Randall begins mentioning Burke and Garrity going to their apartments to question them about the subway murders. Arthur realizes that Randall is only seeking a way to use Arthur in order to cover his own butt and then snaps, brutally stabbing Randall twice in the face before smashing his head against the wall. A terrified Gary questions Arthur's deeds and begs to be let go. Arthur agrees to before playfully scaring him as a prank. Gary tries to undo the lock on Arthur's door but is unable to due to his height. He asks Arthur to open the door for him to which Arthur immediately agrees, pausing once to thank Gary for being the only person in his life who was nice to him. Arthur kisses Gary on the forehead and lets him go.Arthur then dyes his hair green, puts on full clown make-up, and dons a burgundy suit. He then dances down the stairways, fully embracing his insanity and carefree life. Burke and Garrity find Arthur dancing in the street and move in to arrest him. Arthur runs, and they chase him into the subway train where dozens of other Gotham citizens are dressed like clowns after being inspired by the murders. Arthur hides his face with a clown mask, which he steals from a protester and inadvertently starts a brawl in the train cars. As the detectives pursue Arthur, one clown gets in the way, and Burke accidentally shoots him dead when they struggle with his gun. The clowns pull the detectives out of the subway and start beating them relentlessly, allowing Arthur to get away, moving smoothly through the police forces which swarm the area.At the TV station, Arthur meets Murray and his agent Gene (Marc Maron). Before he goes on, Arthur asks Murray to introduce him as \"Joker,\" since Murray referred to him as such when playing his clip. Murray asks Arthur if his clown make-up has political agendas behind it to which Arthur replies, \"I don't believe in that. I don't believe in anything.\" While waiting to be introduced, Arthur sees Murray broadcasting a clip of a struggling Arthur trying to tell a joke. This causes Arthur's mind and plans to change, and then he dances out into the spotlight.Arthur goes out as the show begins. He awkwardly tells Murray a joke, which he finds funny for its dark humor though nobody else does. After being confronted with this, Arthur continues by admitting to the subway murders. Murray and the audience slowly realize that Arthur is serious. Arthur argues that the audience only cares for the victims because Thomas Wayne spoke for them, but anyone else like Arthur would be ignored and walked over. Murray and the audience grow angrier with Arthur, but so does he. Murray scolds Arthur, which escalates into Arthur snapping and telling another joke, grinning giddily. \"What do you get when you cross a mentally ill loner with a society that abandons him and treats him like trash?!\" he asks, only for Murray to try shutting him off before calling for the police. An enraged Arthur then screams, \"You get what you fucking' deserve!\" before blowing Murray's brains out in front of everyone. The audience runs away in terror, and the news of the murder immediately hits the airwaves. Arthur then laughs genuinely for the first time in his life.Gotham is now overrun by rioting citizens dressed as clowns after hearing about what Arthur did. The Waynes leave a movie theater to find the chaos in the streets. Thomas takes his wife Martha (Carrie Louise Putrello) and Bruce into an alley, but one clown follows them and tells Thomas he is getting what he deserves using the punchline that Arthur used on the Murray Franklin show. With that, he shoots Thomas and Martha dead in front of Bruce.Meanwhile, Arthur has been arrested and is being taken by the police. Arthur looks out the window and laughs gleefully as he sees the destruction and chaos he has caused. Just then, the clowns in an ambulance run into the car, killing the cops and freeing Arthur, who is injured and unconscious. When he awakes, Arthur finds himself surrounded by a mob of cheering mobsters in clown masks. The rioters then cheer Arthur on as he stands on a car and embraces their admiration, now that he has gotten the recognition he has long desired. He dances to their cheering and then pauses, finding that his nose is bleeding profusely. He then spreads the blood across his upper lip and grins before standing before them, elevated like a god.Sometime later, Arthur is locked up in Arkham. He laughs after telling this story and visualizes a young Bruce standing over his parents in the alley. Realizing that he has, in a way, turned Bruce into himself, Arthur laughs some more, finding this genuinely hilarious. He meets a new social worker (April Grace) and says he wants to tell her a joke, but she wouldn't get it. A few minutes later, Arthur then steps out of the room, leaving a trail of bloody footprints behind before he is chased around by orderlies.\n    ",
  quotes: [
    "\n\nArthur Fleck:\n[written in notebook]\nThe worst part of having a mental illness is people expect you to behave as if you don't.     ",
    "\n\nArthur Fleck:\nI used to think that my life was a tragedy, but now I realize, it's a fucking comedy.     ",
    "\n\nArthur Fleck:\nFor my whole life, I didn't know if I even really existed. But I do, and people are starting to notice.     ",
    '\n\nArthur Fleck:\nYou don\'t listen, do you? I don\'t think you ever really hear me. You just ask the same questions every week. "How\'s your job?" "Are you having any negative thoughts?" All I have are negative thoughts.     ',
    '\n\nArthur Fleck:\nMurray, one small thing? \nMurray Franklin:\nYeah? \nArthur Fleck:\nWhen you bring me out, can you introduce me as Joker?     ',
  ],
  reviews: [
    "I was a person that saw all the hype and claims of masterpiece as overreacting and overblown excitement for another Joker based film. I thought this looked solid at best and even a bit too pretentious in the trailer, but in here to say I was incredibly wrong. This is a massive achievement of cinema that's extremely rare in a day and age of cgi nonsense and reboots. While this is somewhat of a reboot of sorts, the standalone origin tale is impeccable from start to finish and echoes resemblance to the best joker origin comics from the past. Joaquin bleeds, sweats, and cries his every drop into this magnificently dedicated performance. Heath Ledger would be proud. This is undoubtedly the greatest acting performance since Heath's joker. The directing and writing is slickly brilliant and the bleak settings and tones are palpable throughout. When this film was over the place was blown away and every audience member was awestruck that they witnessed a film that could still transport them into a character's world and very existence. Believe the hype. This is going to be revered as a transcending masterpiece of cinema.",
    "Every once in a while a movie comes, that truly makes an impact. Joaquin's performance and scenography in all it's brilliance. Grotesque, haunting and cringy. Hard to watch at times,... but so mesmerizing, you won't blink an eye watching it. Tragic, but with seriously funny moments. Emotional rollercoaster - sometimes, with multiple emotions popping-up at the same time.this is far from a typical action-riddled predictable super-hero movie - it's a proper psychological thriller/drama, with the single best character development I have ever seen.",
    'This is a movie that only those who have felt alone and isolated can truly relate to it. You understand the motive and you feel sorry for the character. A lot of people will see this movie and think that it encourages violence. But truly, this movie should encourage each and every one of us to become a better person, treat everyone with respect and make each other feel like they belong in this world, instead of making them feel isolated.',
    "Truly a masterpiece, The Best Hollywood film of 2019, one of the Best films of the decade... And truly the Best film to bring a comic book so chillingly and realistically to real ife.\nRemarkable Direction, Cinematography, Music and the Acting.\nSome people are surprised to find it DISTURBING and VIOLENT, but it's a necessity and message.\nIt's about society and reflects those underappreciated/unrecognized/bullied people, proving they can do something too.\nThe way it shows class difference, corruption and how rich and talented rule others around them is not exaggerated and that's what makes it different.\nIt's BELIEVABLE.\nThere could be multiple JOKERs living in our society that could shake those around them in much bitter way than the film shows making people uncomforting people.\nConsider this a wake up call, a message, but first a film. A PERFECT film.",
    "Joaquin Phoenix gives a tour de force performance, fearless and stunning in its emotional depth and physicality. It's impossible to talk about this without referencing Heath Ledger's Oscar-winning performance from The Dark Knight, widely considered the definitive live-action portrayal of the Joker, so let's talk about it. The fact is, everyone is going to be stunned by what Phoenix accomplishes, because it's what many thought impossible - a portrayal that matches and potentially exceeds that of The Dark Knight's Clown Prince of Crime",
  ],
  title: 'Joker',
  trailerUrl: [
    'https://imdb.com/title/tt7286456/videoplayer/vi1723318041?ref_=tt_pv_vi_aiv_1',
    'https://imdb.com/title/tt7286456/videoplayer/vi2883960089?ref_=tt_pv_vi_aiv_2',
    'https://imdb.com/title/tt7286456/videoplayer/vi2059058969?ref_=tt_pv_vi_aiv_3',
  ],
};

export default MOCK_YOUTUBE_ID;
