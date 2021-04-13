console.log('Hello bookshelf');

    var Airtable = require('airtable');
    console.log(Airtable);
    
    // use the airtable librar to get a variable that represents one of our bases
    var base = new Airtable({ apiKey: "keyjtJVsbYmuyLjlZ" }).base(
      "appTQl6lBBepqbNiz"
    );
    
    base('shadows').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 14,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('title'));
        });
    })