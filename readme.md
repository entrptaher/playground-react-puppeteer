- Server only hosts puppeteer 
- Client does everything using page.connect({})

Usage:
```
git clone --recursive https://github.com/entrptaher/playground-react-puppeteer -b parcel

# Terminal 1
cd server
yarn
yarn start

# Terminal 2
cd client
yarn
yarn start
```

Now browse to `http://localhost:1234/` and click **Get Title**
