exports.handler = async (event) => {
    const ssm= new (require('aws-sdk/clients/ssm'));
    const data= await ssm.getParameters({
        Names: ['read-ssm']
    }).promise();
    
    var params = {
        Name: 'read-ssm',
        Value: 'Pranjali Karjawkar',
        Overwrite: true,
        Type: 'String'
    };
    await ssm.putParameter(params).promise();
    // TODO implement
    const response = {
        statusCode: 200,
        body:data
    };
    return response;
};
