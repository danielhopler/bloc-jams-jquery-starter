class Helper {

  playPauseAndUpdate (song = player.currentlyPlaying ) {
    player.playPause(song);

    $('#time-control .total-time').text(player.getDuration(song));

  }
}

const helper = new Helper();
