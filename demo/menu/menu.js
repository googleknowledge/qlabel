$( document ).ready( function() {
	$( '.uls-trigger' ).uls( {
		onSelect : function( language ) {
			$.qLabel.switchLanguage( language );
			$( '.content' ).css( 'direction', $.uls.data.getDir( language ) );
			if ( $.uls.data.getDir( language ) == 'rtl' ) {
				$( '.content' ).css( 'text-align', 'right' );
			}
			else {
				$( '.content' ).css( 'text-align', 'left' );
			}
		},
		quickList: ['en', 'de', 'es', 'fr', 'ru', 'ja', 'ko']
	} );
} );
