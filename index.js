/**
 * @author Danny van Lierop
 * @description Mirror hue bridge values to external source to offload bridge requests or make them available to other networks
 * @license MIT
 */

'use strict';                                                   /** Using a variable, without declaring it, is not allowed **/
//var config = require('./config.json');                        /** module configuration file, (later) placed in parent directory of script directory **/
require('./Fastify.js')();                                      /** Load and run fastify http server */

// Register routes to handle blog posts
const blogRoutes = require('./routes/blogs')
    blogRoutes.forEach((route, index) => {
    fastify.route(route)
});


