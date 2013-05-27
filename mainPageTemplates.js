// This file was automatically generated from mainPage.soy.
// Please don't edit this file by hand.

if (typeof mainPage == 'undefined') { var mainPage = {}; }


mainPage.top = function(opt_data, opt_ignored) {
  return '\t<html><body><link type=\'text/css\' href = \'styles.css\' rel=\'stylesheet\'/><div class=\'navBar\'><div class=\'title\'>thermoSim</div></div><!-- \t<ul class=\'menu\'><li><a href=\'sadf\'>hello</a></li><li><a href=\'sadf\'>hello2</a></li></ul>--><div class=\'headerSpacer\'></div><div class=\'contentWrapper\'><p>Check out the simulations below.  The first three are finished simulations complete with instructional design. The last four demo some of the simulation platform\'s capabilities. The source code is availible <a href = \'https://github.com/dreid1991/thermoSim\'>here</a> under the GNU Affero license.</p><hr>';
};


mainPage.simLinks = function(opt_data, opt_ignored) {
  var output = '\t\t';
  var simulationList6 = opt_data.simulations;
  var simulationListLen6 = simulationList6.length;
  if (simulationListLen6 > 0) {
    for (var simulationIndex6 = 0; simulationIndex6 < simulationListLen6; simulationIndex6++) {
      var simulationData6 = simulationList6[simulationIndex6];
      output += '<div class=\'simRefWrapper\'><div class=\'simTopWrapper\'><div class=\'simTitle\'>' + simulationData6.title + '</div><div class=\'simLink\'><a href=\'thermoSim/levels/' + simulationData6.fileName + '\'>View simulation</a></div></div><div class=\'simDescription\'>' + simulationData6.description + '</div></div>';
    }
  } else {
    output += 'There are no simulations.  Something is probably wrong.';
  }
  output += '</div></body></html>';
  return output;
};
