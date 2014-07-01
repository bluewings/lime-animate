/*jslint browser: true, regexp: true, unparam: true, indent: 4 */
/*global jQuery: true */
(function () {

    'use strict';

    var $ = jQuery;

    var app = angular.module('limeNote', [
        'ngRoute', 'ngSanitize',
        'ngAnimate'
    ]);

    var clicked;

    function runTheAnimation(element, done) {

        /*$(element).animate({
            
        }, 1000, function() {
            console.log('done');
                        done();
        });*/


    }

    function stopTheAnimation() {

    }

    function completeTheAnimation() {

    }

    var duration = 1;

    app.animation('.my-crazy-anim', function ($timeout) {
        return {
            leave: function (element, done) {


                if (tweenTarget) {

  //                  console.log('>>> cloned');

                    document.body.appendChild(tweenTarget.cloned);

                    $(tweenTarget.cloned).css({
                        position: 'absolute',
                        top: tweenTarget.offset.top,
                        left: tweenTarget.offset.left,
                        width: $(tweenTarget.cloned).outerWidth(),
                        WebkitTransform: 'rotateY(0)'
                    });

                    setTimeout(function() {
                    $(tweenTarget.cloned).css({
                        WebkitTransition: 'all ' + duration + 's',
                        top: 0,
                        left: 0,
                        width: '100%',
                        opacity: 0,
                        WebkitTransform: 'rotateY(180deg)'

                    }).one('webkitTransitionEnd', function(event) {

                        $(tweenTarget.cloned).remove();
                        tweenTarget.cloned = null;



                        done();
                    });
                    }, 0);

                    



//setTimeout(function() {done();}, 1000);
                } else {
                    done();
                }

                return function (cancelled) {
                    if (cancelled) {
                        //alert('stop');
                        if (tweenTarget && !tweenTarget.cloned && !tweenTarget.target) {
                            tweenTarget = null;

                        }                        
                        //stopTheAnimation();
                    } else {
                        //alert('complete');
                        if (tweenTarget && !tweenTarget.cloned && !tweenTarget.target) {
                            tweenTarget = null;

                        }                        
                        //completeTheAnimation();
                    }
                }           
            },
            enter: function (element, done) {

                if (tweenTarget) {

                    //console.log($(element).get(0));

                $(element).css('opacity', 0);
                    

                html2canvas($(element).find('> div').get(0), {

                    onrendered: function(canvas) {
                        //$(element).css('visibility', 'hidden');

                        tweenTarget.target = document.createElement('img');

                        tweenTarget.target.src = canvas.toDataURL();

                        console.log(canvas.toDataURL());

                        document.body.appendChild(tweenTarget.target);


                    $(tweenTarget.target).css({
                        position: 'absolute',
                        top: tweenTarget.offset.top,
                        left: tweenTarget.offset.left,
                        width: $(tweenTarget.cloned).outerWidth(),
                        opacity: 0,
                        WebkitTransform: 'rotateY(180deg)'
                    });


                    setTimeout(function() {
                    $(tweenTarget.target).css({
                        WebkitTransition: 'all ' + duration + 's',
                        top: 0,
                        left: 0,
                        width: '100%',
                        opacity: 1,
                        WebkitTransform: 'rotateY(0)'

                    }).one('webkitTransitionEnd', function(event) {

                        $(tweenTarget.target).remove();
                        //$(element).css('visibility', 'visible');
                        $(element).css('opacity', 1);
                        tweenTarget.target = null;
                        if (!tweenTarget.cloned && !tweenTarget.target) {
                            tweenTarget = null;

                        }

                        done();
                    });
                    }, 0);                    


                        //console.log(canvas);
                        //tweenTarget = null;

                    }

                });

                    

                } else {
                    done();
                }



                



                

                return function (cancelled) {
                    if (cancelled) {
                        //alert('stop');
                        if (tweenTarget && !tweenTarget.cloned && !tweenTarget.target) {
                            tweenTarget = null;

                        }                        
                        //stopTheAnimation();
                    } else {
                        //alert('complete');
                        if (tweenTarget && !tweenTarget.cloned && !tweenTarget.target) {
                            tweenTarget = null;

                        }                        
                        //completeTheAnimation();
                    }
                }

                //alert('enter');

                //console.log('>>>')

                //console.log(clicked);

                var elem = $(element);

                console.log('>>> element render')

                console.log(elem.get(0));


                //return;


var afterImg;
                if (clicked && clicked.size() > 0) {



                    html2canvas(elem.get(0), {



                        onrendered: function (canvas) {



                            //console.log('>>> element start')

                            //afterImg = document.createElement('')




                            //console.log('aaa');

                        }
                    });



                    clicked.css({
                        WebkitTransition: 'all 1s',
                        width: clicked.outerWidth()
                    });

                    element.css({

                        position: 'absolute',
                        top: clicked.offset().top,
                        left: clicked.offset().left,
                        width: '100%',
                        WebkitTransformOrigin: '0% 0%',
                        WebkitTransform: 'scale(' + (clicked.outerWidth() / document.documentElement.clientWidth) + ')',
                        opacity: 0.5
                    });

                    element.css({

                    });



                    setTimeout(function () {

                        element.css({
                            WebkitTransition: 'all 1s',
                            WebkitTransform: 'scale(1)',
                            top: 0,
                            left: 0,
                            //left: 0,
                            //width: '100%',
                            opacity: 1
                        });
                        clicked.css({

                            top: 0,
                            left: 0,
                            width: '100%',
                            opacity: 0,

                        });
                    });
                    setTimeout(function () {
                        clicked.remove();
                        clicked = null;
                        done();
                    }, 1100);



                    /*, 750, function () {
                        //alert('done');
                        clicked.remove();
                        clicked = null;
                        done();
                    });*/



                    console.log('wow!!!');
                }
                //runTheAnimation(element, done);
                return function (cancelled) {
                    if (cancelled) {
                        stopTheAnimation();
                    } else {
                        completeTheAnimation();
                    }
                }

                //run the animation here and call done when the animation is complete
                /*return function(cancelled) {


        //this (optional) function will be called when the animation
        //completes or when the animation is cancelled (the cancelled
        //flag will be set to true if cancelled).
      };*/
            }
            /*,
    leave: function(element, done) { },
    move: function(element, done) { },

    //animation that can be triggered before the class is added
    beforeAddClass: function(element, className, done) { },

    //animation that can be triggered after the class is added
    addClass: function(element, className, done) { },

    //animation that can be triggered before the class is removed
    beforeRemoveClass: function(element, className, done) { },

    //animation that can be triggered after the class is removed
    removeClass: function(element, className, done) { }*/
        };
    });

    // limeNote-constant
    app.constant('CONFIG', {
        ARCHIVE_MY_ID_KEY: 'lime-my-id',
        ARCHIVE_NOTES_KEY: 'lime-notes',
        SYNC_INTERVAL: 3000,
        STYLE: {
            COVER_HEIGHT: 220,
            NAV_BAR_HEIGHT: 47
        }
    });

    app.constant('CONSTANT', {
        SUCCESS: 'success',
        ERROR: 'error'
    });
    // //limeNote-constant

    app.config([
        '$locationProvider',
        '$routeProvider',
        '$compileProvider',
        function ($locationProvider, $routeProvider, $compileProvider) {

            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: '/templates/limeNote-list',
                    controller: 'lime.control.list',
                    animation: 'slide'
                })
                .when('/:shareId', {
                    templateUrl: '/templates/limeNote-list',
                    controller: 'lime.control.list'
                })
                .when('/view/:shareId', {
                    templateUrl: '/templates/limeNote-view',
                    controller: 'lime.control.view'
                })
                .otherwise({
                    redirectTo: '/'
                });

            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|intent):/);
        }
    ]);

    var tweenTarget;

    app.controller('lime.control.list', function ($scope, $location) {

        $scope.data = {};

        $scope.cards = [{
            title: 'test1',
            id: parseInt(Math.random() * 8000, 10) + 1000

, bgcolor: '#7bb7fa'

        }, {
            title: 'test2',
            id: parseInt(Math.random() * 8000, 10) + 1000
            , bgcolor: '#60d7a9'

        },{
            title: 'test3',
            id: parseInt(Math.random() * 8000, 10) + 1000
            , bgcolor: '#fdc162'

        },{
            title: 'test4',
            id: parseInt(Math.random() * 8000, 10) + 1000
            , bgcolor: '#fd6a62'

        },{
            title: 'test5',
            id: parseInt(Math.random() * 8000, 10) + 1000
            
, bgcolor: '#f68dbb'
        }];

        var test = $('jQuery');

        console.log(test);

        $scope.pageClass = 'page-home';

        $scope.moveTo = function(uri, event) {

            var card = $(event.target).closest('.card');

            
            //tweenTarget = ;

                    html2canvas(card.get(0), {

                        onrendered: function(canvas) {

                            tweenTarget = {
                                cloned: document.createElement('img'),
                                offset: card.offset()
                            };

                            


                            //tweenTarget = document.createElement('img');
                            
                            //document.body.appendChild(asis);
                            tweenTarget.cloned.src = canvas.toDataURL();

                            card.css('visibility', 'hidden');

                            console.log('>>> uri clicked');

                            $scope.$apply(function() {

                                $location.path(uri);

                            });

                            

                            console.log('>>> uri clicked after');

                            

                            //alert('done');

                        }

                    });

            

            //$location.
            

        };

        $scope.moveWithAnim = function (event) {

            console.log(event);
            clicked = $(event.target).closest('div.card');

            var offset = clicked.offset();

            event.preventDefault();



            html2canvas(clicked.get(0), {

                onrendered: function (canvas) {

                    var img = document.createElement('img');

                    img.src = canvas.toDataURL();

                    //console.log(img.src);
                    document.body.appendChild(img);

                    img = $(img);

                    img.css({
                        position: 'absolute',
                        top: offset.top,
                        left: offset.left,
                        zIndex: 10000

                    });
                    console.log('>>> rendered img');
                    console.log(img);

                    clicked.css('opacity', 0);

                    clicked = img;

                    $scope.$apply(function () {

                        $location.path('/view/test');

                    });


                    console.log('>>> location path set!!!');


                    //console.log('>>> draw fin.');

                    //ne();

                }

            });



            //console.log(clicked.size());



        };



    });
    app.controller('lime.control.view', function ($scope) {

        $scope.data = {};

        var test = $('jQuery');

        console.log(test);
        $scope.pageClass = 'page-about';



    });

    app.run(function ($rootScope) {

        console.log('>>> app run');

        $rootScope.status = {
            myId: null,
            headerOpen: false,
            selectMode: false,
            hasChanges: false,
            syncFromRemote: false,
            notesHashCode: '',
            filterTag: ''
        };
    });

    angular.element(document).ready(function () {



        angular.bootstrap(document, ['limeNote']);
    });



}());