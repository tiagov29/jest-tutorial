const filterByT = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            {id: 1, url: "http://www.url1.dev"},
            {id: 2, url: "http://www.url2.dev"},
            {id: 3, url: "http://www.link3.dev"}
        ];

        const output = [{ id:3, url: "http://www.link3.dev"}];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output);

    });
});

function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}


// test for search term "url"

describe("find term uRL", () => {
    test("it should filter by a search term (uRL)", () => {
        const input = [
            {id: 1, url: "http://www.url1.dev"},
            {id: 2, url: "http://www.url2.dev"},
            {id: 3, url: "http://www.link3.dev"}
        ];

        const output = [{ id:1, url: "http://www.url1.dev"},{id: 2, url: "http://www.url2.dev"}];

        expect(findByTerm(input, "uRL")).toEqual(output);
    })
});


function findByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}


//test for an empty search term

describe("find an empty search term", () => {
    test("it should find a empty search term (obs)", () => {
        const input = [
            {id: 1, url: "http://www.url1.dev"},
            {id: 2, url: "http://www.url2.dev"},
            {id: 3, url: "http://www.link3.dev"}
        ];

        const output = [];

        expect(ByTerm(input, "obs")).toEqual(output);
    })
});


function ByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}