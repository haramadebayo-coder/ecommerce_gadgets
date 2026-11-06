import { db } from 'hatchable';
export const access = 'public';
export const methods = ['GET'];
export default async function(req,res){
 const {rows}=await db.query('SELECT id, name, category, brand, price, original_price AS "originalPrice", rating, review_count AS "reviewCount", stock_quantity AS "stockQuantity", badge, image, description FROM products WHERE active = true ORDER BY featured DESC, created_at DESC');
 res.setHeader('Cache-Control','public, max-age=60');
 res.json(rows);
}