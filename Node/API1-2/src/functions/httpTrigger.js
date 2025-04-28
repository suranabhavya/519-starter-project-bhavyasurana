const { app } = require('@azure/functions');
//hi
app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const currentDateTime = new Date().toISOString();
        return { body: `Current datetime: ${currentDateTime}` };
    }
});
