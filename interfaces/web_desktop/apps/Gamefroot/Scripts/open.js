Application.run = function( msg, iface )
{
	var v = new View( {
		title: i18n( 'Gamefroot' ),
		width: 1024,
		height: 768
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
