class DataFetcher {
  async GetEuropeanDogIDs() {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&isHighlight=true&hasImages=true&q=dog';
    try {
      const response = await fetch(url, { mode: "cors" });
      // Check for HTTP error?
      const metData = response.json();
      // Check for data error?
      return metData;
    } catch (error) {
      console.error("Error fetching data from the Met: ", error);
      // Provide fallback data?
    }
  }

  async GetPaintingObject(id) {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    try {
      const response = await fetch(url, { mode: "cors" });
      // Check for HTTP error?
      const paintingData = response.json();
      // Check for data error?
      return paintingData;
    } catch (error) {
      console.error("Error fetching painting from the Met: ", error);
      // Provide fallback data?
    }
  }
}

export default DataFetcher;