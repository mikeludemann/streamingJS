(function ($) {

    $.fn.streaming = function (options) {

        var settings = $.extend({

            title: "Streaming Service",
            content: "",
            footer: "(c) Copyright",
            radiusBorder: false,
            fontSize: "14px",

            youtube: "tester",
            vimeo: "tester",
            deezer: "tester",
            spotify: "tester",
            soundcloud: "tester",
            juke: "tester",
            tidal: "tester",
            appleMusic: "tester",
            amazonPrimeMusic: "tester",
            googlePlayMusic: "tester",
            twitch: "tester"

        }, options);

        $("body").append('<div id="streaming" class="modal"><div class="modal-container"><div class="modal-header"><div id="header" class="w90">Header - Title</div><div class="w10"><span class="close">&times;</span></div></div><div id="content" class="modal-content"><div>Simple Content</div></div><div id="footer" class="modal-footer"><div>Footer - Notes</div></div></div></div>');

        this.click(function () {

            $("#header").html(settings.title);
            $("#content").html(settings.content);
            $("#footer").html(settings.footer);

            if (settings.youtube == "" || settings.youtube == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="youtube" class="box"><a href="https://youtube.com/' + settings.youtube + '" target="_blank"><div><i class="fab fa-youtube fa-2x"></i><span class="place">YouTube</span></div></a></div>');
            
            }

            if (settings.vimeo == "" || settings.vimeo == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="vimeo" class="box"><a href="https://vimeo.com/' + settings.vimeo + '" target="_blank"><div><i class="fab fa-vimeo fa-2x"></i><span class="place">vimeo</span></div></a></div>');
            
            }

            if (settings.deezer == "" || settings.deezer == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="deezer" class="box"><a href="https://deezer.com/de/artist/' + settings.deezer + '" target="_blank"><div><i class="fas fa-music fa-2x"></i><span class="place">Deezer</span></div></a></div>');
            
            }

            if (settings.spotify == "" || settings.spotify == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="spotify" class="box"><a href="https://spotify.com/user/' + settings.spotify + '" target="_blank"><div><i class="fab fa-spotify fa-2x"></i><span class="place">Spotify</span></div></a></div>');
            
            }

            if (settings.soundcloud == "" || settings.soundcloud == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="soundcloud" class="box"><a href="https://soundcloud.com/' + settings.soundcloud + '" target="_blank"><div><i class="fab fa-soundcloud fa-2x"></i><span class="place">SoundCloud</span></div></a></div>');
            
            }

            if (settings.juke == "" || settings.juke == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="juke" class="box"><a href="https://juke.com/de/de/music/artist/' + settings.juke + '" target="_blank"><div><i class="fas fa-music fa-2x"></i><span class="place">Juke</span></div></a></div>');
            
            }

            if (settings.tidal == "" || settings.tidal == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="tidal" class="box"><a href="https://tidal.com/us/' + settings.tidal + '" target="_blank"><div><i class="fas fa-music fa-2x"></i><span class="place">TIDAL</span></div></a></div>');
            
            }

            if (settings.appleMusic == "" || settings.appleMusic == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="appleMusic" class="box"><a href="https://itunes.apple.com/artist/' + settings.appleMusic + '" target="_blank"><div><i class="fab fa-apple fa-2x"></i><span class="place">Apple Music</span></div></a></div>');
            
            }

            if (settings.amazonPrimeMusic == "" || settings.amazonPrimeMusic == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="amazonPrimeMusic" class="box"><a href="https://amazon.com/' + settings.amazonPrimeMusic + '" target="_blank"><div><i class="fab fa-amazon fa-2x"></i><span class="place">Amazon Prime Music</span></div></a></div>');
            
            }

            if (settings.googlePlayMusic == "" || settings.googlePlayMusic == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="googlePlayMusic" class="box"><a href="https://play.google.com/store/music/artist/' + settings.googlePlayMusic + '" target="_blank"><div><i class="fab fa-google-play fa-2x"></i><span class="place">Google Play Music</span></div></a></div>');
            
            }

            if (settings.twitch == "" || settings.twitch == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="twitch" class="box"><a href="https://twitch.tv/' + settings.twitch + '" target="_blank"><div><i class="fab fa-twitch fa-2x"></i><span class="place">twitch</span></div></a></div>');
            
            }

            if (settings.radiusBorder == true) {

                $(".modal-container").css("border-radius", "25px");

            } else {

                $(".modal-container").css("border-radius", "0px");

            }

            if (settings.fontSize == "" ||  settings.fontSize == null) {

                $(".modal-container").css("font-size", "12px");

            } else {

                $(".modal-container").css("font-size", "" + settings.fontSize + "");

            }

            $("#streaming").fadeIn();

            $("body").css("position", "fixed");

        });

        $(".close").click(function () {
            $("#streaming").fadeOut();
            $("body").css("position", "");
        });

        return this.css({
            title: settings.title,
            content: settings.content,
            footer: settings.footer,
            radiusBorder: settings.radiusBorder,
            fontSize: settings.fontSize
        });

    };

}(jQuery));

var dw = document ||  window;

dw.onclick = function (event) {

    var modal = document.getElementById("streaming");

    if (event.target == modal) {

        $("#streaming").fadeOut();
        $("body").css("position", "");

    }

}