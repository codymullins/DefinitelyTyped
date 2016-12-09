/// <reference path="index.d.ts"/>

function testNumbers() {
    Humanize.formatNumber(123456789, 2);
    Humanize.intComma(123123445);
    Humanize.compactInteger(123456789, 1);
    Humanize.compactInteger(-7832186132456328967, 4);
    Humanize.compactInteger(-100, 2)
    Humanize.boundedNumber(110, 100);
    Humanize.ordinal(22);
    Humanize.times(0);

    for (let i = 0; i < 5; i++) {
        Humanize.times(i, { "4": "too many" });
        // Bonus!
        if (i === 1) {
            Humanize.times(1.1);
        }
    }

    const second:number = 1000;
    const week:number = 6.048e8;
    const decade:number = 3.156e11;

    Humanize.pace(1.5, second, "heartbeat");
    // Approximately 2 heartbeats per second

    Humanize.pace(4, week);
    // Approximately 4 times per week

    Humanize.pace(1, decade, "life crisis");
    // Less than 1 life crisis per week

    Humanize.fileSize(1024 * 20);
    // "20 Kb"

    Humanize.fileSize(1024 * 2000);
    // "1.95 Mb"

    Humanize.fileSize(Math.pow(1000, 4));
    // "931.32 Gb"

    Humanize.pluralize(1, "duck");
    // "duck"

    Humanize.pluralize(3, "duck");
    // "ducks"

    Humanize.pluralize(3, "duck", "duckies");
    // "duckies"
}

function testStrings() {
    Humanize.truncate("long text is good for you");
    // "long text is good for you"

    Humanize.truncate("long text is good for you", 19);
    // "long text is goo..."

    Humanize.truncate("long text is good for you", 19, "... etc");
    // "long text is... etc"

    Humanize.truncateWords("long text is good for you", 5);
    // "long text is good for ..."

    Humanize.capitalize("some boring string");
    // "Some boring string"

    Humanize.capitalize("wHoOaA!");
    // "WHoOaA!"

    Humanize.capitalize("wHoOaA!", true);
    // "Whooaa!"

    Humanize.capitalizeAll("some boring string");
    // "Some Boring String"

    Humanize.titleCase("some of a boring string");
    // "Some of a Boring String"

    Humanize.titleCase("cool the          iTunes cake, O'Malley!");
    // "Cool the iTunes Cake, O'Malley!"
}

function testArrays() {
    const items:string[] = ["apple", "orange", "banana", "pear", "pineapple"];

    Humanize.oxford(items);
    // "apple, orange, banana, pear, and pineapple"

    Humanize.oxford(items, 3);
    // "apple, orange, banana, and 2 others"

    // pluralizes properly too!
    Humanize.oxford(items, 4);
    // "apple, orange, banana, pear, and 1 other"

    Humanize.oxford(items, 3, "and some other fruits");
    // "apple, orange, banana, and some other fruits"

    const websites: string[] = [
        "https://github.com",
        "https://github.com/DefinitelyTyped/DefinitelyTyped",
        "https://www.typescriptlang.org"
    ];
    const bigfootPics: string[] = [];

    const str1:string = "Programmers " + Humanize.frequency(websites, "only visited these websites");
    // "Programmers only visited these websites 3 times"

    const str2:string = "Bigfoot " + Humanize.frequency(bigfootPics, "took pictures of food");
    // "Bigfoot never took pictures of food"
}

function testUtilities() {
    Humanize.toFixed(0.615, 2);
    // "0.62"

    Humanize.normalizePrecision(-232.231);
    // 232
}