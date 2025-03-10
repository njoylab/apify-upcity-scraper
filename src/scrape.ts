import * as cheerio from 'cheerio';
import { gotScraping } from "crawlee";

export async function getCategory(url: string, page: number, proxy?: string) {
    const category = url.split('/').pop()?.split('?')[0];

    let query = url.split('?').pop();
    if (query) {
        query += `&page=${page}`;
    } else {
        query = `?page=${page}`;
    }
    const fetchurl = `https://upcity.com/${category}.json${query}`;
    const data = await gotScraping({
        url: fetchurl,
        proxyUrl: proxy,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const json = JSON.parse(data.body);
    return json.profiles;
}

export async function getProfile(url: string, proxy?: string) {
    const data = await gotScraping({
        url: url,
        proxyUrl: proxy,
    });
    const $ = cheerio.load(data.body);
    // get data-react-class="containers/Profile"
    const profile = $('[data-react-class="containers/Profile"]').attr('data-react-props');
    if (!profile) {
        throw new Error('No profile found');
    }
    const json = JSON.parse(profile);
    return json.profile;
}