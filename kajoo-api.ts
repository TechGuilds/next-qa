const consciaApi = async ({ auth, componentCode, parameters }: IParams) => {
    var myHeaders = new Headers();
    myHeaders.append('X-Customer-Code', auth.customerCode || 'techguilds');
    myHeaders.append('X-Environment-Code', auth.environment || 'preview');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${auth.apiToken}`);
    if (componentCode) {
        var raw = JSON.stringify({
            componentCodes: [componentCode],
            context: {},
            parameters,
        });
        var requestOptions = { method: 'POST', headers: myHeaders, body: raw };
        return fetch(
            `${auth.hostUrl}/experience/components/_query`,
            requestOptions
        ).then((response) => response.json());
    }
};

const kajooFetch = async (params: Record<string, IKajooApi>) => {
    let result: Record<string, any> = {};
    const fieldNames = Object.keys(params);
    for (const fieldName of fieldNames) {
        if (params[fieldName].type === 'conscia.ai') {
            result[fieldName] = await consciaApi({
                auth: {
                    apiToken: params[fieldName].apiToken,
                    customerCode: params[fieldName].customerCode,
                    environment: params[fieldName].environment,
                    hostUrl: params[fieldName].hostUrl,
                },
                componentCode: params[fieldName].componentCode,
                templateCode: params[fieldName].templateCode,
                parameters: params[fieldName].parameters,
            });
        }
    }
    return result;
};
interface IKajooApi {
    customerCode: string;
    templateCode?: string;
    parameters?: {};
    type: 'conscia.ai' | 'contentStack';
    apiToken: string;
    componentCode: string;
    environment?: string;
    hostUrl: string;
}
interface IConsiaAuth {
    apiToken: string;
    customerCode: string;
    environment?: string;
    hostUrl: string;
}
interface IParams {
    auth: IConsiaAuth;
    componentCode?: string;
    templateCode?: string;
    parameters?: {};
}
export default kajooFetch;
