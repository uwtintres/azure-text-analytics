const KeyPhrasesDriver = require('./key-phrases-driver');

module.exports = function(RED) {
    function keyPhrases(config) {
        RED.nodes.createNode(this, config);
        this.on('input', async (msg) => {
            const BOOLEAN_FLAGS = {
                'yes': true,
                'false': false,
            };

            try {
                const options = {
                    requestArray: msg.payload,
                    loggingOptOut: BOOLEAN_FLAGS[config.loggingOptOut] || BOOLEAN_FLAGS['no'],
                    showStats: BOOLEAN_FLAGS[config.showStats] || BOOLEAN_FLAGS['no'],
                    modelVersion: config.modelVersion || 'latest',
                };

                const driver = new KeyPhrasesDriver(this, this.credentials.key, this.credentials.region);

                const res = await driver.run(options);

                this.status({});
                this.send({ payload: res });
            } catch (e) {
                // Clear status in the node
                this.status({});
                // Send error to catch node, original msg object must be provided
                this.error(e.message, msg);
            }
        });
    }

    RED.nodes.registerType("key-phrases", keyPhrases, {
        credentials: {
            key: { type: 'password' },
            region: { type: 'text' }
        },
    });
}
