	var ConcessionsTable = require('shared/widgets/concessions/table');
	var AveragesTable = require('shared/widgets/averages/table');
	var OverviewWidget = require('shared/widgets/property/overview');

	var MarketAnalysisWidget = require('shared/widgets/property/marketAnalysis');
	var template = require('hbs!./templates/analysis');

	var propertyCompSetService = require('services/propertyCompSet');
	var submarketService = require('services/submarkets');

	var throbberTemplate = require('hbs!ui/templates/processing_sample');

	var searchFilters = [
		'marketName',
		'submarket',
		'address',
		'executionDate',
		'expirationDate',
		'spaceTypeId'
	];

var competitiveSetIcon = require('hbs!ui/svg_icons/competitive_set');
	var submarketIcon = require('hbs!ui/svg_icons/submarkets');


var xyz = {
  asdf: 'asdfgg',
  fhsj: 'fhdjns'
};

var zxw = {asdf: 'asdfgg',fhsj: 'fhdjns',"bdfrd": 1};
var zswdf = ['asdf', 'fdsa', 'asdgr', 'asdfds', 'asdfad'];


var abc = {bcd: 1234 };
var dfe = [123, 456];

doAThing({one: 'two', three: 4, '5': 6})

function hello(there, world) {
  console.log(there);
}

function MrClass(asdf) {
}
MrClass.prototype.fghgl = function () {
  	this.dougasd = 1+1;
	return this.toString();
  
  
}

try {
  doAThing();

}  catch (e) {
throw e; 
 }

switch(whatever) {
  case 'a':
    doNothing();
    break;
    
  case 'b':
  default:
    doSomethingIfYouReallyWantTo(abc);
}

var gfh = wha ? 
    		true : 
otherThing() ?
    false : true;

var xyz = {
	createFilters: function () {
        var property = this.options.property,
          propertyAddress = propertyService.searchAddress(property);

        var comparableAddresses = this.options.comparables
            .filter(function (comparable) {
                return comparable.id !== property.id;
            })
            .map(function (comparable) {
                return comparable.property;
            })
            .map(propertyService.searchAddress);

        var submarketFilters = new FiltersCollection([], {
            filters : searchFilters,
            marketId: this.options.market.name
        });

        comparableFilters.init();

        submarketFilters.setOperand('submarket', [property.submarketName, 'asdf']);

        var filterCollections = [comparableFilters, submarketFilters];
      
      for (var i = 0; i < 10; i++) {
        console.log('poo'+i);
      }

        // this removes retail
        filterCollections.forEach(function (filter) {
            filter.setOperand('spaceTypeId', [1]);
        });

        return filterCollections;
	}
};

doAThing({one: "two o'clock", three: 4, "5": 6})
