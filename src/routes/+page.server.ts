// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { GalleryItem } from '$lib/types/gallery';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

interface Service {
	title: string;
	price: number;
	description: string;
	image: string;
	order: number;
}

export async function load() {
	const galleryItems: GalleryItem[] = [];
	const services: Service[] = [];
	let aboutHeading = 'The Hound Walker';
	let aboutContent = '';

	// Load gallery items
	try {
		// Read gallery items from CMS content directory
		const contentDir = join(process.cwd(), 'content', 'gallery');
		const files = await readdir(contentDir);

		// Filter for markdown files
		const mdFiles = files.filter((file) => file.endsWith('.md'));

		// Read and parse each file
		const itemsWithOrder: Array<GalleryItem & { order: number }> = [];

		for (const file of mdFiles) {
			const filePath = join(contentDir, file);
			const fileContent = await readFile(filePath, 'utf-8');
			const { data } = matter(fileContent);

			if (data.image) {
				itemsWithOrder.push({
					img: `${data.image} 800w`,
					thumb: data.image,
					height: data.height || '800',
					width: data.width || '600',
					alt: data.alt || data.title || 'Gallery image',
					order: data.order || 999
				});
			}
		}

		// Sort by order field (lower numbers first)
		itemsWithOrder.sort((a, b) => a.order - b.order);

		// Remove order field from final items
		galleryItems.push(...itemsWithOrder);
	} catch (error) {
		console.error('Error loading gallery items:', error);
		// Return empty array if content directory doesn't exist yet
	}

	// Load services
	try {
		const servicesDir = join(process.cwd(), 'content', 'services');
		const files = await readdir(servicesDir);

		// Filter for markdown files
		const mdFiles = files.filter((file) => file.endsWith('.md'));

		for (const file of mdFiles) {
			const filePath = join(servicesDir, file);
			const fileContent = await readFile(filePath, 'utf-8');
			const { data } = matter(fileContent);

			if (data.title && data.price !== undefined) {
				services.push({
					title: data.title,
					price: data.price,
					description: data.description || '',
					image: data.image || '',
					order: data.order || 999
				});
			}
		}

		// Sort by order field (lower numbers first)
		services.sort((a, b) => a.order - b.order);
	} catch (error) {
		console.error('Error loading services:', error);
		// Use default services if content directory doesn't exist yet
		services.push(
			{
				title: 'Solo',
				price: 16,
				description: 'Some time restriction these can be done 10am-2pm is group walking',
				image: '/images/services/solo.jpg',
				order: 1
			},
			{
				title: 'Group',
				price: 14,
				description: '50% discount for second dog at same address',
				image: '/images/services/group.jpg',
				order: 2
			},
			{
				title: 'Out of Hours',
				price: 16,
				description: 'On weekends or before 9am and after 5pm on weekdays',
				image: '/images/services/ooh.jpg',
				order: 3
			}
		);
	}

	// Load about page content
	try {
		const aboutPath = join(process.cwd(), 'content', 'pages', 'about.md');
		const aboutFile = await readFile(aboutPath, 'utf-8');
		const { data, content } = matter(aboutFile);

		aboutHeading = data.heading || 'The Hound Walker';
		aboutContent = await marked(content);
	} catch (error) {
		console.error('Error loading about content:', error);
		// Use default content if file doesn't exist
		aboutContent = `
			<p>Welcome to the website for the Hound Walker. I am an ex-teacher who has a real love of dogs and the outdoors.</p>
			<p>Working in Leyland and surrounding areas I offer reliable and safe services for your dogs. The services include solo and group walks for your dogs, bespoke walking for those owners who work shifts, including last minute callouts due to work commitments.</p>
			<p>Photographs are posted on Facebook so you can see the adventures of your furry friends. I have a canine first aid certificate, DBS checked and fully insured.</p>
		`;
	}

	return {
		homepageGalleryItems: galleryItems.slice(0, 3),
		allGalleryItems: galleryItems,
		services,
		aboutHeading,
		aboutContent
	};
}
