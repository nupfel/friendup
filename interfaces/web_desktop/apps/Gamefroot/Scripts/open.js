Application.run = function( msg, iface )
{
	var v = new View( {
		title: i18n( 'Gamefroot' ),
		width: 1200,
		height: 800
	} );
	this.mainView = v;

	v.onClose = function(){ Application.quit(); }

	var f = new File( 'Progdir:Templates/frame.html' );
	f.onLoad = function( data )
	{
		v.setContent( data );
	}
	f.load();

}
