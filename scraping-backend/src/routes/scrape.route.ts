import { Router, type Request, type Response } from "express";
import axios from "axios";
import { JSDOM } from "jsdom";

const router = Router();

router.get("/api/scrape", async (req: Request, res: Response) => {
    const keyword = req.query.keyword as string ;
    if (!keyword) res.status(400).json({ error: "Keyword is required" });

    try {
        const response = await axios.get(`https://www.amazon.com/s?k=${keyword}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            },
        });
        
        const html = response.data;
        const dom = new JSDOM(html);
        const document = dom.window.document;

        const productsList = Array.from(document.querySelectorAll('[data-component-type="s-search-result"]')).map((el: any) => {
            const title = el.querySelector('h2 span')?.textContent?.trim() || 'N/A';
            const rating = el.querySelector('[aria-label*="out of 5 stars"]')?.getAttribute('aria-label') || 'N/A';
            const reviews = el.querySelector('[aria-label*=" ratings"]')?.textContent || 'N/A';
            const image = el.querySelector('img')?.src || '';
      
            return { title, rating, reviews, image };
          });

        res.json(productsList);
        
    } catch (error) {
        console.error("Error scraping Amazon:", error);
        res.status(500).json({ error: "Failed to scrape Amazon" });
    }
});


export {router};