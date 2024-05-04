import UK_POST_CODES from '../../utils/ukPostCodes';

export async function GET(req: Request) {
	const count = UK_POST_CODES.length || 0;
	console.log('count ===', count);
	return new Response(JSON.stringify(count));
}
