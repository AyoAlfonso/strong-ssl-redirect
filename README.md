# strong-ssl-redirect  [![Build Status](https://travis-ci.com/AyoAlfonso/strong-ssl-redirect.svg?branch=master)](https://travis-ci.com/AyoAlfonso/strong-ssl-redirect) [![npm version](https://badge.fury.io/js/strong-ssl-redirect.svg)](https://badge.fury.io/js/strong-ssl-redirect)

The strong SSL redirect middleware that redirects non-secure access to HTTPS works well with AWS and heroku.

## Description

The middleware forces the HTTP to a HTTPS request to your application by accessing the host headers and stamps a default 301.

By default this module also checks for anormallies like google.com and forcing it into www,google.com by default.


## How It Works
The `strong-ssl-redirect` module does not redirect to HTTPS when running on a localhost as that is typically not secured with an SSL certificate. You can use ngrok.io for this purpose and to tunnel traffic to your localhost.

## Installation

```
$ npm install strong-ssl-redirect --save
```

## Usage

```javascript
var express = require('express');
var sslRedirect = require('strong-ssl-redirect');
var app = express();
var environment  = 'production'  /* 'other' 'development', 'production'*/
app.use(sslRedirect({
    environment,
    www: true,
    status: 301
}));

If you want to force the request to redirect from https://google.com to https://www.google.com set the www property to true like so.
```javascript
 `www: true`
```

##Testing
Test suite covers basics usage, you should supply your env to the root test file.


## License
MIT License

Copyright (c) 2018 Ayo Alfonso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
