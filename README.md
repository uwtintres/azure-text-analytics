## Introduction
**azure-text-analytics** is a collection of nodes for text analytics from [Microsoft Azure Text Analytics Services](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics-v3-2-Preview-2/operations/Languages).

### About us
The [Internet of Things Research (INTRES) Group](https://github.com/UWTINTRES)
at the University of Washington Tacoma (UWT) developed and maintains this package to promote Internet of Things (IoT) research and teaching. This package seeks to accelerate the adoption of IoT concepts by developing a simple mechanism to increase the productivity of researchers, software engineers, developers, and data scientists.

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

![Example flow](https://github.com/uwtintres/azure-text-analytics/blob/main/img/flow.png?raw=true)

The function node contains the payload:

![Payload](https://github.com/uwtintres/azure-text-analytics/blob/main/img/payload.png?raw=true)

The configuration of sentiment node is pretty simple, all parameters can be chosen by dropdown menu.
The output format is exactly from the official API document and is passed to the next node for further usage.

![Result](https://github.com/uwtintres/azure-text-analytics/blob/main/img/result.png?raw=true)

#### Disclaimer
INTRES and UWT are not responsible for the usage or utilization of these packages. They are meant to promote IoT research and education. IoT service providers may require additional verification steps to utilize the features outlined in these packages. We are not in any way responsible for the misuse of these packages. For more details on the service agreement and terms, please click [here](https://azure.microsoft.com/en-us/support/legal/).
