export class MusicTrack {
  /**
   * @param {String} title
   * @param {String} artist
   * @param {String} duration
   */
  constructor(title, artist, duration) {
      if (title.length === 0) {
          throw new Error('Title cannot be empty');
      }
      if (artist.length === 0) {
          throw new Error('artist cannot be empty');
      }
      if (duration > 0) {
          throw new Error('duration cannot be 0');
      }
      this.title = title;
      this.artist = artist;
      this.duration = duration; // duration in seconds
  }
}