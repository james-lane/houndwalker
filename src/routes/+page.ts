// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const images = [
	{
		img: '/images/Image1.jpeg 600w',
		thumb: '/images/Image1.jpeg',
		height: '800',
		width: '600',
		alt: 'Dogs in water'
	},
	{
		img: '/images/Image2.jpeg 800w',
		thumb: '/images/Image2.jpeg',
		height: '1067',
		width: '800',
		alt: 'Dogs in field'
	},
	{
		img: '/images/Image3.jpeg 768w',
		thumb: '/images/Image3.jpeg',
		height: '1024',
		width: '768',
		alt: 'Dog in stream'
	}
];

export function load() {
	return {
		homepageGalleryItems: [images[0], images[1], images[2]],
		allGalleryItems: images
	};
}
