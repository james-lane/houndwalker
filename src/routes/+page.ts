// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
const images = [
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180826-114750_orig.jpg 1667w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180826-114750_orig.jpg',
		height: '800',
		width: '600',
		alt: 'Mike and dogs'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180911-125531_orig.jpg 2400w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180911-125531_orig.jpg',
		height: '800',
		width: '1067',
		alt: 'Mike on beach with dogs'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20171128-wa0005_orig.jpg 2400w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20171128-wa0005_orig.jpg',
		height: '1024',
		width: '768',
		alt: 'Dog on beach'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/2018-07-11-09-06-03_orig.jpg 3000w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/2018-07-11-09-06-03_orig.jpg',
		height: '1058',
		width: '921',
		alt: 'Dog on grass'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180910-113244_1_orig.jpg 3000w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180910-113244_1_orig.jpg',
		height: '800',
		width: '600',
		alt: 'Mike with dogs on cliff'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180826-121101_orig.jpg 1667w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180826-121101_orig.jpg',
		height: '800',
		width: '600',
		alt: 'Black dog'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180912-141401-1_orig.jpg 2400w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/img-20180912-141401-1_orig.jpg',
		height: '800',
		width: '600',
		alt: 'Dog on rocks'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/2018-09-11-14-00-43_orig.jpg 3000w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/2018-09-11-14-00-43_orig.jpg',
		height: '630',
		width: '511',
		alt: 'Mike on beach with his dogs'
	},
	{
		img: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/2018-10-24-17-58-00_orig.jpg 3000w',
		thumb: 'http://houndwalker.uk/uploads/1/2/0/5/120528285/2018-10-24-17-58-00_orig.jpg',
		height: '800',
		width: '1100',
		alt: 'Dog running in park'
	}
];

export function load() {
	return {
		homepageGalleryItems: [images[0], images[2], images[4]],
		allGalleryItems: images
	};
}
