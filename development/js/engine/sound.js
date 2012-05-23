/*
Name: Sound Library
Version: 1
Desc: A series of controls for creating music, sound effect, and anything audio
related for a game.

Note: That in iOS you can only fire one sound at a time,
there is no workaround for this other than prioritizing sounds.
*/

var cp = cp || {};

cp.audio = {
    // Loader tests and returns a usable audio type at initialization (mp3, ogg
    // ect).
    // Example type: '.mp3'
    type: '',
    
    // Url to access audio elements
    url: 'assets/audio',
    
    Sound: Class.extend({
        init: function(name) {
            
            this.volume = 1;
            this.location = 0;
            this.canplay = false;
            
            // Forumlate the src
            this.name = name;
            this.src = cp.audio.url + '/' + name;
            
            // Create the audio object
            this.reset();

        },
        
        // To free up space, we kill the audio object when it's done playing
        // If you want to access it after it's done playing, use reset()
        reset: function() {
            
            var self = this;
            
            // Create the audio object
            this.audio = new Audio(this.src);
            
            //When the sound is done playing, take the reference to it and THROW IT ON THE GROUNNDD
            this.audio.addEventListener('ended', function() {
                self.audio = undefined;
            }, false);
            
            // We can't set the location until the browser is able to play it
            this.audio.addEventListener('canplay', function() {
                self.canplay = true;
                self.setLocation(self.location);
            });
            
            return this;
        },
        
        play: function() {
            this.audio.play();
            return this;
        },
        
        setLocation: function(sec) {
            this.location = sec;
            if (this.canplay) this.audio.currentTime = sec;
            return this;
        },
        
        setVolume: function(dec) {
            this.audio.volume = this.volume = dec;
            return this;
        },
        
        pause: function() {
            this.audio.pause();
            return this;
        },
        
        // Is this really necessary?
        stop: function() {
            this.pause().setLocation(0);
            return this;
        }

    }),
    
    el: {
        // Element storage location for audio element
        store: '',
        create: function() {
            // http://stackoverflow.com/questions/10535124/javascript-create-audio-element-cross-browser-issue
        }
    },
    
    music: function() {
        
    },
    
    mute: function() {
        
    }
};