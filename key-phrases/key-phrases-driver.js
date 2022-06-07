const axios = require('axios').default;
const TextAnalyticsBase = require('../utilities/text-analytics-base');

class KeyPhrasesDriver extends TextAnalyticsBase {

    constructor(node, key, region) {
        super(node, key, region);
        this.baseUrl = `https://${this.getRegion()}.api.cognitive.microsoft.com/text/analytics/v3.2-preview.2/keyPhrases`;
    }

    preProcess(options) {
        // Test msg.payload, it should be an array
        if (!Array.isArray(options.requestArray)) throw new Error('msg.payload should be an array');
        const availableSet = new Set(['id', 'text', 'language']);
        for (let obj of options.requestArray) {
            const ownProperties = Object.getOwnPropertyNames(obj);
            for (let p of ownProperties) {
                if (availableSet.has(p)) continue;
                throw new Error(`Property '${p}' is not allowed. Only 'id', 'text' and 'language' are allowed.`);
            }
        }
        options.requestBody = { documents: options.requestArray };
    }

    async analyzeInternal({ showStats, loggingOptOut, requestBody, modelVersion, config }) {
        this.setStatus({ fill: 'green', shape: 'dot', text: 'Detecting' });
        const res = await axios.post(`${this.baseUrl}?showStats=${showStats}&loggingOptOut=${loggingOptOut}&modelVersion=${modelVersion}`, requestBody, config);
        return res.data;
    }
}

module.exports = KeyPhrasesDriver;
