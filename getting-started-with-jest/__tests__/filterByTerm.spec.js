describe("Filter function", () => {
    test("it should find by a search term (uRl)", () => {
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
