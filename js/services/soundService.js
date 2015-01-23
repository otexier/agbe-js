agbeServices.factory('soundService', ['$log', 'agbeService', function ($log, agbeService) {

    var me = {

        soundsById : {},

        registerSound : function(id,sound) {
            me.soundsById[id] = sound;
        },

        unregisterSound : function(id,sound) {
            delete me.soundsById[id];
        },

        playSound : function(soundId) {
            var sound = me.soundsById[soundId];
            if (sound) {
                sound.play();
            }
        }
    }

    return me;
}]);