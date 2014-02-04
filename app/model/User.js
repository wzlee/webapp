Ext.define('ksp.model.User', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
            'id',
			'name',
			'link',
			'avatar',
			'avatar_large',
			'gender',
			'description',
			'videos_count',
			'playlists_count',
			'favorites_count',
			'vv_count',
			'followers_count',
			'following_count',
			'statuses_count',
			'subscribe_count',
			'regist_time',
			'hasUpdate'
		]
	}
});