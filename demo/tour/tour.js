$( document ).ready( function() {
	$( '.uls-trigger' ).uls( {
		onSelect : function( language ) {
			$.qLabel.switchLanguage( language );
		},
		quickList: ['en', 'de', 'hr', 'uz', 'zh', 'ko']
	} );
} );
