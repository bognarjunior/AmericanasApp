const apiClientKey = `apiClientKey=ff3668967197e707`;
const apiKey = `apiKey=12207f52edfc5c9a`;
const categoryId = `categoryId=virtual-home`;
const path = `https://recs.richrelevance.com/rrserver/api/rrPlatform/recsForPlacements?`;

const url = `${path}${apiClientKey}&${apiKey}&${categoryId}&count=12&includeMVTData=true&includeStrategyData=true&limit&placements=home_page.rr1`;

const headerDefault = Bearer => ({
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getProductList = async () => {
  try {
    const response = await fetch(url, headerDefault());
    const payload = await response.json();
    return {
      result: payload.placements,
      isFetch: true,
    }
  } catch (error) {
    return {
      result: error,
      isFetch: false
    }
  }
};