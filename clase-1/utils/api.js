const fetchApi = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        for (let i = 0; i < data.results.length; i++) {
            console.log(`${data.results[i].id} - ${data.results[i].name} - ${data.results[i].gender}`);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = fetchApi;
