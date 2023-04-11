/**
 * Contains the miscellaneous route handlers.
 * @author Maryann Unoarumi <https://github.com/Maryann529>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
