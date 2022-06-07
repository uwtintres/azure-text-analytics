## Introduction
**azure-text-analytics** is a collection of nodes that translation services from [Microsoft Azure Translation Services](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-2-Preview-2/operations/Languages).

### Features:
These features are currently supported:
1. Language detection
2. Key phrases
3. Sentiment

Most of the parameters of these nodes are supported. For more information about all the settings and output format, please refer to the individual node.

## Installation
`npm install @intres/azure-text-analytics`
## Example usage of sentiment
The example flow is as follows:

![Example flow](https://github.com/uwtintres/azure-translator/blob/main/img/flow.png?raw=true)

The function node contains the payload:

![Payload](https://github.com/uwtintres/azure-translator/blob/main/img/payload.png?raw=true)

The configuration of sentiment node is pretty simple, all parameters can be chosen by dropdown menu.
The output format is exactly from the official API document and is passed to the next node for further usage.

![Result](https://github.com/uwtintres/azure-translator/blob/main/img/result.png?raw=true)
