/** https://www.sitepoint.com/create-rest-api-fastify/ **/

module.exports = function () {
    /** instantiate fastify framework **//** enable/disable logging **/
    this.fastify = require("fastify")({ logger: false }),
        
        /** fastify - declare a default route for debug **/
        this.fastify.get("/", async (request, reply) => {
            reply.send("Hello World3!");
        }),
        
        this.fastify.setErrorHandler((error, reply) => {
            /** fastify - declare Error handler **/
            error.message = JSON.parse(error.message);
            reply.send(error);
        }),
        
        (start = async () => {
            /** fastify - run the http-server! **/
            try {
                await fastify.listen({ port: 80, host: "0.0.0.0" }, (err, address) => {
                    /** start http server listening - https://www.fastify.io/docs/latest/Reference/Server/#:~:text=%C2%B6-,listen,-Starts%20the%20server **/
                    console.log(`Server is now listening on ${address}`);
                });
            } catch (err) {
                /** catch http-server error **/
                fastify.log.error(err); /** log http-server error **/
                process.exit(1); /** stop script on http-server error **/
            }
        }),
        start(); /** start http-server **/
};
