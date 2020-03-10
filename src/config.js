"use strict";
/*
* TWITTER APP CONFIGURATION
* consumer_key
* consumer_secret
* access_token
* access_token_secret
* retweet frequency rate
* favorite frequency rate
*/

module.exports = {
  twitter: {
  consumer_key:         'OmpBWs8mHKiIFDbwJGke7T0uE',
  consumer_secret:      'NBMddOT4LOmAaE4iKIjSMV1VyqTlWUY7TBgOYkHCQufyV8KdW5',
  access_token:         '1175597608124862466-dxoZkX9mRcqOT3kd4SoF4AjmWZOw0W',
  access_token_secret:  'ViY6P0Qnhb586rrQtbaYzbKpBi37iCnIoYvJi5G4hbWPo' 
  },
  twitterConfig: {
    queryString:
      "#Nodejs, #Angular, #Reactjs, #ionicframework, #ReactNative, #es6,#100daysofcode"
    // blackList:
    //   "reactdom,_adeeb,subjecttoreview,stacktrender,adaltarecruit,heroes_bot,_30days30sites,droidscott,scottbottest"
  },
  retweetRate: 1500000,
  favoriteRate: 1500000
};
