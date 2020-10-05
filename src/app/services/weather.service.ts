import OAuth from 'oauth';

const getWeather = () => {
    const header = {
        "X-Yahoo-App-Id": "zjF9q4qr"
    };
    const request = new OAuth.OAuth(
        '',
        '',
        'dj0yJmk9SFVxcTNDUTdBV3MxJmQ9WVdrOWVtcEdPWEUwY1hJbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTU5',
        'c64da683fd4a8685395104453c661840f7f92065',
        '1.0',
        null,
        'HMAC-SHA1',
        0,
        header
    );
    return request;
}

export {
    getWeather
}