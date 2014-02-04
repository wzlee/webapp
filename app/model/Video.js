Ext.define('ksp.model.Video', {
	extend: 'Ext.data.Model',
	
	config: {
        fields: [
            'id',
			'title',
			'link',
			'thumbnail',
			'bigThumbnail',
			'duration',
			'category',
			'state',
			'create',
			'published',
			'description',
			'player',
			'public_type',
			'copyright_type',
			'tags',
			'view_count',
			'favorite_count',
			'comment_count',
			'up_count',
			'down_count',
			'operation_limit',
			'streamtypes'
        ]
	}
});