import { categories } from "../../utils/ecotripPriceList";

export async function GET() {
  return new Response(JSON.stringify(categories));
}
