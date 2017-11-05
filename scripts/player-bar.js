$(document).ready( function() {
  $('button#play-pause').click(function(){
    helper.playPauseAndUpdate();
    $(this).attr('playState',player.playState);
  });

  $('button#previous').click(function(){
    if(player.playState !== 'playing'){return;}
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    const previousSong = album.songs[previousSongIndex];
    if(previousSongIndex < 0) {return;}

    helper.playPauseAndUpdate(previousSong);
  });

  $('button#next').click(function(){
    if(player.playState !== 'playing'){return;}
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if(nextSongIndex >= album.songs.length) {return;}

    helper.playPauseAndUpdate(nextSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if(player.playState !== 'playing'){return;}
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

});
