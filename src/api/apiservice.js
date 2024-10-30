const BASE_URL = process.env.REACT_APP_API_URL;

export async function fetchApis() {
    const response = await fetch(`${BASE_URL}/api/apis`);
    if (!response.ok) {
        throw new Error('Failed to fetch APIs');
    }
    return response.json();
}
