import fs from 'fs';
import path from 'path';

export async function GET() {
	const configPath = path.join(process.cwd(), 'static', 'admin', 'config.yml');
	const config = fs.readFileSync(configPath, 'utf-8');

	return new Response(config, {
		headers: {
			'Content-Type': 'text/yaml; charset=utf-8',
			'Cache-Control': 'no-cache'
		}
	});
}
