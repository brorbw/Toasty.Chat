var spoonCommand = function(bot, sender, args)
{
  try {
    var spoon = "\"There is no spoon\" - Spoon boy";
    bot.send(spoon);
  } catch (e) {
    bot.send(e.toString());
  }
};
module.exports = {spoon: spoonCommand};
