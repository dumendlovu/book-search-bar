var shelf = new Vue({
  el: '#book-shelf',
  data: {
    books:[
      {
        title:"The 15th Affair: The New Women's Murder Club Novel",
        author:"James Patterson",
        genres:'crimeDrama thriller novel',
        imgLink:'img/bc-15th_affair_fs9zas.jpg',
        amazonLink:'https://www.amazon.com/15th-Affair-Womens-Murder-Club/dp/1455585289',
        goodReadsLink:'https://www.goodreads.com/book/show/25613617-15th-affair'
      },
      {
        title:"Before the Fall",
        author:"Noah Hawley",
        genres:'fiction novel',
        imgLink:'img/bc-before_the_fall_xn9ry4.jpg',
        amazonLink:'https://www.amazon.com/Before-Fall-Noah-Hawley/dp/1455561797',
        goodReadsLink:'https://www.goodreads.com/book/show/40670008-before-the-fall'
      },
      {
        title:"Diary of a Wimpy Kid: Double Down",
        author:"Jeff Kinney",
        genres:'childFiction novel',
        imgLink:'img/bc-diary_of_a_wimpy_kid_odilob.jpg',
        amazonLink:'https://www.amazon.com/Diary-Wimpy-Kid-11-Double/dp/1419723448',
        goodReadsLink:'https://www.goodreads.com/book/show/30051627-double-down'
      },
      {
        title:"Harry Potter and the Cursed Child, Parts 1 & 2",
        author:"J.K. Rowling",
        genres:'childFiction fantasy play',
        imgLink:'img/bc-harry_potter_pwzilg.jpg',
        amazonLink:'https://www.amazon.com/Harry-Potter-Cursed-Child-Parts/dp/133821666X',
        goodReadsLink:'https://www.goodreads.com/book/show/29056083-harry-potter-and-the-cursed-child---parts-one-and-two'
      },
      {
        title:"Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        author:"J.D. Vance",
        genres:'nonFiction critique',
        imgLink:'img/bc-hillbilly_elegy_ipelvr.jpg',
        amazonLink:'https://www.amazon.com/Hillbilly-Elegy-Memoir-Family-Culture/dp/0062300547',
        goodReadsLink:'https://www.goodreads.com/book/show/27161156-hillbilly-elegy'
      },
      {
        title:"Killing the Rising Sun: How America Vanquished World War II Japan",
        author:"Bill O'Reilly",
        genres:'history critique',
        imgLink:'img/bc-killing_the_rising_sun_qw2dcx.jpg',
        amazonLink:'https://www.amazon.com/Killing-Rising-Sun-Vanquished-OReillys/dp/1627790624',
        goodReadsLink:'https://www.goodreads.com/book/show/29370481-killing-the-rising-sun'
      },
      {
        title:"The Black Widow",
        author:"Daniel Silva",
        genres:'thriller novel',
        imgLink:'img/bc-the_black_widow_esmzpi.jpg',
        amazonLink:'https://www.amazon.com/Black-Widow-Novel-Gabriel-Allon/dp/1443456489',
        goodReadsLink:'https://www.goodreads.com/book/show/27213121-the-black-widow'
      },
      {
        title:"Night School: A Jack Reacher Novel",
        author:"Lee Child",
        genres:'fiction novel',
        imgLink:'img/bc-the_jack_reacher_thriller_xwdyi7.jpg',
        amazonLink:'https://www.amazon.com/Night-School-Jack-Reacher-Novel/dp/0804178828',
        goodReadsLink:'https://www.goodreads.com/book/show/28077464-night-school'
      },
      {
        title:"The Last Mile",
        author:"David Baldacci",
        genres:'crimeDrama novel',
        imgLink:'img/bc-the_last_mile_fqj7tu.jpg',
        amazonLink:'https://www.amazon.com/Last-Mile-Memory-Man/dp/1455586447',
        goodReadsLink:'https://www.goodreads.com/book/show/26245853-the-last-mile'
      },
      {
        title:"The Whistler",
        author:"John Grisham",
        genres:'crimeDrama novel',
        imgLink:'img/bc-the_whistler_ofw7y6.jpg',
        amazonLink:'https://www.amazon.com/Whistler-Novel-John-Grisham/dp/1101967684',
        goodReadsLink:'https://www.goodreads.com/book/show/29354916-the-whistler'
      },
      {
        title:"Truly Madly Guilty",
        author:"Liane Moriarty",
        genres:'fiction novel',
        imgLink:'img/bc-truly_madly_guilty_zlsdzb.jpg',
        amazonLink:'https://www.amazon.com/Truly-Madly-Guilty-Liane-Moriarty/dp/1250069807',
        goodReadsLink:'https://www.goodreads.com/book/show/26247008-truly-madly-guilty'
      },
      {
        title:"When Breath Becomes Air",
        author:"Paul Kalanithi",
        genres:'autoBiograpghy memoir',
        imgLink:'img/bc-when_breath_becomes_air_gi50fe.jpg',
        amazonLink:'https://www.amazon.com/When-Breath-Becomes-Paul-Kalanithi/dp/081298840X',
        goodReadsLink:'https://www.goodreads.com/book/show/25899336-when-breath-becomes-air'
      },
      {
        title:"Fool Me Once",
        author:"Harlan Coben",
        genres:'crimeDrama thriller novel',
        imgLink:'img/bc-fool_me_once_mcfhvf.jpg',
        amazonLink:'https://www.amazon.com/Fool-Me-Once-Harlan-Coben/dp/1501217615',
        goodReadsLink:'https://www.goodreads.com/book/show/26109394-fool-me-once'
      },
      {
        title:"Crisis of Character",
        author:"Gary. J Byrne",
        genres:'autoBiograpghy history memoir',
        imgLink:'img/bc-crisis_of_character_zubxes.jpg',
        amazonLink:'https://www.amazon.com/Summary-Crisis-Character-Discloses-Experience/dp/1717079032',
        goodReadsLink:'https://www.goodreads.com/book/show/31572651-summary-of-crisis-of-character'
      },
      {
        title:"The Wrong Side of Goodbye ",
        author:"Michael Connelly",
        genres:'crimeDrama thriller novel',
        imgLink:'img/bc-wrong_side_of_goodbye_ey7p5w.jpg',
        amazonLink:'https://www.amazon.com/Wrong-Goodbye-Harry-Bosch-Novel/dp/1455524212',
        goodReadsLink:'https://www.goodreads.com/book/show/29154543-the-wrong-side-of-goodbye'
      },
      {
        title:"The Magnolia Story ",
        author:"Chip and Joanna Gaines",
        genres:'autoBiograpghy history memoir',
        imgLink:'img/bc-magnolia_story_txiz5r.jpg',
        amazonLink:'https://www.amazon.com/Summary-Crisis-Character-Discloses-Experience/dp/1717079032',
        goodReadsLink:'https://www.goodreads.com/book/show/31572651-summary-of-crisis-of-character'
      },
      {
        title:"The Nest",
        author:"Cynthia D'Aprix Sweeney",
        genres:'autoBiograpghy romance memoir',
        imgLink:'img/bc-the_nest_dp5xhm.jpg',
        amazonLink:'https://www.amazon.com/Nest-Cynthia-DAprix-Sweeney/dp/0062414224',
        goodReadsLink:'https://www.goodreads.com/book/show/25781157-the-nest'
      },
      {
        title:"One With You: A Crossfire Novel ",
        author:"Sylvia Day",
        genres:'romance fiction novel',
        imgLink:'img/bc-one_with_you_qurgwu.jpg',
        amazonLink:'https://www.amazon.com/One-You-Crossfire-Novel-Book-ebook/dp/B0183KJZE0',
        goodReadsLink:'https://www.goodreads.com/book/show/17876897-one-with-you'
      },
      {
        title:"The Obsession ",
        author:"Nora Roberts",
        genres:'crimeDrama thriller novel',
        imgLink:'img/bc-the_obsession_wbnqtf.jpg',
        amazonLink:'https://www.amazon.com/Obsession-Nora-Roberts/dp/110198760X',
        goodReadsLink:'https://www.goodreads.com/book/show/26236956-the-obsession'
      },
      {
        title:"Everything We Keep",
        author:"Kerry Lonsdale",
        genres:'mystery novel',
        imgLink:'img/bc-everything_we_keep_cid3l9.png',
        amazonLink:'https://www.amazon.com/Everything-We-Keep-Kerry-Lonsdale/dp/1503935310',
        goodReadsLink:'https://www.goodreads.com/book/show/29639736-everything-we-keep'
      }
    ],
    bookTemplate: ''
  },
  methods:{
    loadBooks: function() {
      var list = this.books;
      var newHTML = '';

      for(var i = 0; i < list.length; i++){
        newHTML = newHTML + '<article class="col-md-3 p-1 filterDiv '+list[i].genres+'"><img class="img-fluid img-thumbnail" src="'+list[i].imgLink+'" alt="'+list[i].title+'"/><p class="text-center h5 p-1">'+list[i].title+'</p><p class="text-center font-italic">'+list[i].author+'</p><button class="btn btn-default btn-info border border-dark btn-block"><a href="'+list[i].amazonLink+'" target="_blank"><ion-icon name="cart"></ion-icon> Buy on Amazon</a></button><button class="btn btn-default btn-secondary border border-dark btn-block"><a href="'+list[i].goodReadsLink+'" target="_blank"><ion-icon name="alert"></ion-icon> Find it on GoodReads</a></button></article>';
      }
      this.bookTemplate = newHTML;
    }
  },
  beforeMount: function(){
    this.loadBooks();
  }
});
