Ext.define('ksp.view.PlayVideo', {
    extend: 'Ext.Video',
    xtype: 'playvideo',

    config: {
    	title:'视频播放',
        fullscreen: true,
        tpl:['<div algin="center" style="text-align:center;margin:100px auto;">',
        		'<embed ',
	        		'type="application/x-shockwave-flash" ',
	        		'src="http://player.opengg.me/loader.swf?VideoIDS={id}&isAutoPlay=false&isShowRelatedVideo=false&embedid=-&showAd=0" ',
	        		'id="movie_player" ',
	        		'name="movie_player" ',
	        		'bgcolor="#FFFFFF" ',
	        		'quality="high" ',
	        		'wmode="transparent" ',
	        		'allowfullscreen="true" ',
	        		'flashvars="isShowRelatedVideo=false&showAd=0&show_pre=1&show_next=1&isAutoPlay=false&isDebug=false&UserID=&winType=interior&playMovie=true&MMControl=false&MMout=false&RecordCode=1001,1002,1003,1004,1005,1006,2001,3001,3002,3003,3004,3005,3007,3008,9999" ',
	        		'pluginspage="http://www.macromedia.com/go/getflashplayer" ',
	        		'width="480" ',
	        		'height="320">',
	    		'</embed>' +
    		'</div>'
		].join('')
//        x        : 600,
//        y        : 300,
//        width    : 480,
//        height   : 320,
//        url      : "porsche911.mov",
//        posterUrl: 'porsche.png'
    }
});
