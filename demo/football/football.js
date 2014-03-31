$( document ).ready( function() {
	$( '.uls-trigger' ).uls( {
		onSelect : function( language ) {
			$.qLabel.switchLanguage( language );
		},
		quickList: ['en', 'pt', 'es', 'hr', 'fr', 'ru', 'ja']
	} );
} );
