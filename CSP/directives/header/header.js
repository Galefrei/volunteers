mainModule.directive('header', function(){
	return{		
		restrict:"E",					//ограничение что можно только использовать как тег <header>
		templateUrl: 'directives/header/header.csp', 
		controller: function() {
		}
	}
	
	
});