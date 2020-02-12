$( document ).ready( function() {
	$( '.uls-trigger' ).uls( {
		onSelect : function( language ) {
			$.qLabel.switchLanguage( language );
		},
		quickList: ['en', 'uz', 'hr', 'de', 'ru']
	} );
} );
