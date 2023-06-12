// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export function load() {
	return {
		items: [
			{
				img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180826-114750_orig.jpg 1667w',
				thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180826-114750_orig.jpg',
				height: '800',
				width: '600',
				alt: 'Mike and dogs'
			},
			{
				img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180910-113244_1_orig.jpg 3000w',
				thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180910-113244_1_orig.jpg',
				height: '800',
				width: '600',
				alt: 'Mike with dogs on cliff'
			},
			{
				img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180912-141401-1_orig.jpg 2400w',
				thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180912-141401-1_orig.jpg',
				height: '800',
				width: '600',
				alt: 'Dog on rocks'
			}
		]
	};
}
