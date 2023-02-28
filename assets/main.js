window.arenaCallback = () => {
	// Put your JavaScript in here!
	// This will run after Are.na’s API returns your data.

	// parse data to extract what you want to filter
    const channelDescription = data.items;

    // filter function
    const filteredItems = channelDescription.filter(item => item.category === 'fear');

    // display filtered results on different HTML pages
    const filteredResultsPage1 = document.querySelector('#index.html');
    const filteredResultsPage2 = document.querySelector('#page2');

}
