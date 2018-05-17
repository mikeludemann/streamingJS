# streamingJS

A simple Modal Plugin for many social media platforms

## Prerequisite

* JQuery 3.x (Smaller JQuery 3.x with JQuery Migrate)
* Font Awesome (From Repository or add yourself)

## Example

```code
Default

$("#test").streaming();

Modify options - Simple

$("#test").streaming({
    title: "Streaming",
    footer: "(c) Copyright",
    radiusBorder: false,
    fontSize: "20px"
});

Modify options - Advanced

$("#test").streaming({
    title: "Streaming Service",
    content: "",
    footer: "(c) Copyright",
    radiusBorder: true,
    fontSize: "14px",

    youtube: "tester",
    vimeo: "tester",
    deezer: "tester",
    spotify: "tester",
    soundcloud: "tester",
    juke: "tester",
    tidal: "tester",
    appleMusic: "tester",
    amazonPrimeMusic: "tester",
    googlePlayMusic: "tester",
    twitch: "tester"
});
```