// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/)
import { Actor, Dataset } from 'apify';
import { getCategory, getProfile } from './scrape.js';


interface Input {
    url: string;
    page?: number;
}

// The init() call configures the Actor for its environment. It's recommended to start every Actor with an init()
await Actor.init();

const {
    url = 'https://upcity.com/profiles/smartsites-digital-marketing-agency', //'https://upcity.com/advertising?list_sort_by=review_count&list_sort_order=desc&filter=0',
    page = 1
} = await Actor.getInput<Input>() ?? {} as Input;

const proxyConfiguration = await Actor.createProxyConfiguration();
const proxy = await proxyConfiguration?.newUrl();

if (url.startsWith('https://upcity.com/profiles/')) {
    const profile = await getProfile(url, proxy);
    await Dataset.pushData(profile);
} else {
    const profiles = await getCategory(url, page, proxy);
    await Dataset.pushData(profiles);
}

// Gracefully exit the Actor process. It's recommended to quit all Actors with an exit()
await Actor.exit();
