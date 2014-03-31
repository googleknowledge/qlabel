$( 'document' ).ready( function() {
	$('.langselect').click(function() {
		var lang = $(this).attr('id');
		$.qLabel.switchLanguage(lang);
	});
} );
