/**
 * Single source of truth for Care Gap Risk Score data.
 * All components must use this loader.
 */

const DATA_PATH = "/data/care_gap_ranked.json";

/**
 * Fetches and returns the care gap ranking data.
 * @returns {Promise<{data: Array, isPlaceholder: boolean}>}
 */
export async function getCareGapData() {
    const response = await fetch(DATA_PATH);

    if (!response.ok) {
        throw new Error(`Failed to load care gap data: ${response.status}`);
    }

    const data = await response.json();

    // Detect placeholder vs final data
    // Final NHIS data has 76 subgroups; placeholder would have fewer
    const isPlaceholder = data.length < 50;

    return {
        data,
        isPlaceholder,
    };
}

/**
 * Get top N highest-risk subgroups
 * @param {Array} data - Full dataset
 * @param {number} n - Number of top groups to return
 */
export function getTopRiskGroups(data, n = 10) {
    return data.slice(0, n);
}

/**
 * Get the single highest-risk subgroup
 * @param {Array} data - Full dataset
 */
export function getHighestRiskGroup(data) {
    return data[0] || null;
}
