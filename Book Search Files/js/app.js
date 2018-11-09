var shelf = new Vue({
  el: '#book-shelf',
  data: {
    books:[
      {
        title:"The 15th Affair: The New Women's Murder Club Novel",
        author:"James Patterson",
        genres:'crimeDrama thriller novel',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649198/bc-15th_affair_fs9zas.jpg',
        amazonLink:'https://www.amazon.com/15th-Affair-Womens-Murder-Club/dp/1455585289',
        goodReadsLink:'https://www.goodreads.com/book/show/25613617-15th-affair'
      },
      {
        title:"Before the Fall",
        author:"Noah Hawley",
        genres:'fiction novel',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649180/bc-before_the_fall_xn9ry4.jpg',
        amazonLink:'https://www.amazon.com/Before-Fall-Noah-Hawley/dp/1455561797',
        goodReadsLink:'https://www.goodreads.com/book/show/40670008-before-the-fall'
      },
      {
        title:"Diary of a Wimpy Kid: Double Down",
        author:"Jeff Kinney",
        genres:'childFiction novel',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649214/bc-diary_of_a_wimpy_kid_odilob.jpg',
        amazonLink:'https://www.amazon.com/Diary-Wimpy-Kid-11-Double/dp/1419723448',
        goodReadsLink:'https://www.goodreads.com/book/show/30051627-double-down'
      },
      {
        title:"Harry Potter and the Cursed Child, Parts 1 & 2",
        author:"J.K. Rowling",
        genres:'childFiction fantasy play',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649183/bc-harry_potter_pwzilg.jpg',
        amazonLink:'https://www.amazon.com/Harry-Potter-Cursed-Child-Parts/dp/133821666X',
        goodReadsLink:'https://www.goodreads.com/book/show/29056083-harry-potter-and-the-cursed-child---parts-one-and-two'
      },
      {
        title:"Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
        author:"J.D. Vance",
        genres:'nonFiction critique',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649182/bc-hillbilly_elegy_ipelvr.jpg',
        amazonLink:'https://www.amazon.com/Hillbilly-Elegy-Memoir-Family-Culture/dp/0062300547',
        goodReadsLink:'https://www.goodreads.com/book/show/27161156-hillbilly-elegy'
      },
      {
        title:"Killing the Rising Sun: How America Vanquished World War II Japan ",
        author:"Bill O'Reilly",
        genres:'history critique',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649169/bc-killing_the_rising_sun_qw2dcx.jpg',
        amazonLink:'https://www.amazon.com/Killing-Rising-Sun-Vanquished-OReillys/dp/1627790624',
        goodReadsLink:'https://www.goodreads.com/book/show/29370481-killing-the-rising-sun'
      },{
        title:"The Black Widow",
        author:"Daniel Silva",
        genres:'thriller novel',
        imgLink:'http://res.cloudinary.com/dtj4lxtyr/image/upload/v1519649174/bc-the_black_widow_esmzpi.jpg',
        amazonLink:'https://www.amazon.com/Black-Widow-Novel-Gabriel-Allon/dp/1443456489',
        goodReadsLink:'https://www.goodreads.com/book/show/27213121-the-black-widow'
      }
    ],
    bookTemplate: ''
  },
  methods:{
    loadBooks: function() {
      var list = this.books;
      var newHTML = '';

      for(var i = 0; i < list.length; i++){
        newHTML = newHTML + '<article class="col-md-3 col-sm-6 filterDiv '+list[i].genres+'"><img src="'+list[i].imgLink+'" alt="'+list[i].title+'"/><p class="text-center">'+list[i].title+'<br><span>'+list[i].author+'</span></p><button class="btn btn-default btn-warning"><a href="'+list[i].amazonLink+'" target="_blank"><ion-icon name="cash"></ion-icon> Buy on Amazon</a></button><button class="btn btn-default btn-primary"><a href="'+list[i].goodReadsLink+'" target="_blank"><ion-icon name="alert"></ion-icon> Find it on GoodReads</a></button></article>';
      }
      this.bookTemplate = newHTML;
      //console.log(newHTML);
    }
  },
  beforeMount: function(){
    this.loadBooks();
    //console.log("loaded");
  }
});
