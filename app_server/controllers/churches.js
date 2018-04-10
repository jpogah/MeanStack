
/* GET home page */
module.exports.homelist = function(req, res){
  res.render('churches-list', {
    title: 'Churchesaroundme - find a church near you',
    pageHeader : {
      title: 'Churchesaroundme',
      strapline: 'Find a church near you!'
    },
    sidebar: 'Looking for a church close to your home? Looking for a\
     particular denominational church to attend? Churchesaroundme helps people\
     locate nearby churches.\
     You can help others locate your church today by adding it to our list of churches',
    churches:[ {
      name: 'The Miracle Center',
      rating: 3,
      address: '3751 Commercial Ave, San Antonio TX 78221',
      denomination: 'Non-denominational',
      distance: '100m'
    },
    {
      name: 'The Miracle Center',
      rating: 3,
      address: '3751 Commercial Ave, San Antonio TX 78221',
      denomination: 'Non-denominational',
      distance: '100m'
    }
  ]
});

};

  /* GET 'Church Info' page */
  module.exports.churchInfo = function(req, res){
    res.render('church-info', {
      title: 'The Miracle center',
      denomination: 'non-denominational',
      pageHeader:{
        title: 'The Miracle center'
      },
      sidebar: 'Looking for a church close to your home? Looking for a\
       particular denominational church to attend? Churchesaroundme helps people\
       locate nearby churches.\
       You can help others locate your church today by adding it to our list of churches',
       church: {
         name : 'The miracle center',
         denomination:'non-denominational',
         address: '3751 Commercial Ave, San Antonio TX 78221',
         serviceTime: ['Sunday 9:40AM', 'Wednesday 7:30PM'],
         rating : 3,
         ministries: ['Singles ministry', 'Men/women ministry', 'youth ministry'],
         coords: {
           lat: 29.335170,
           lng: -98.516810
         },
         reviews: [{
                author: 'Johnpaul Ogah',
                rating: 5,
                timestamp: '16 June 2017',
                reviewText: 'what a great place to worship and have fellowship.The pastor and members are all very friendly.'},
                {
                author: 'Gwaldis Tester',
                rating: 3,
                timestamp: '16 June 2017',
                reviewText: 'I\'m really enjoying the services and always looking forward to church service.'
            }]

       }
    });
  }

  module.exports.addChurch = function(req, res){
    res.render('add-church', {title: 'Add church'});
  }

    /* GET 'Add review' page */
    module.exports.addReview = function(req, res){
      res.render('church-review-form', {title: 'Add review'});
    }
