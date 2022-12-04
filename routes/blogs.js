/** https://www.sitepoint.com/create-rest-api-fastify/ **/
const blogController = require('../controller/blogs');

const routes = [{
        method: 'GET',
        url: '/api/blogs',
        handler: blogController.getAllBlogs
    },
    // GET - Without validation
    //{
    //    method: 'GET',
    //    url: '/api/blogs/:id',
    //    handler: blogController.getBlog
    //},
    {
        method: 'GET',
        url: '/api/blogs/:id',
        schema: getBlogValidation, // add validation
        handler: blogController.getBlog
    },
    // POST - Without validation
    //{
    //    method: 'POST',
    //    url: '/api/blogs',
    //    handler: blogController.addBlog
    //},
    {
        method: 'POST',
        url: '/api/blogs',
        schema: addBlogValidation, // add validation
        handler: blogController.addBlog
    },
    {
        method: 'PUT',
        url: '/api/blogs/:id',
        handler: blogController.updateBlog
    },
    {
        method: 'DELETE',
        url: '/api/blogs/:id',
        handler: blogController.deleteBlog
    }
]

const getBlogValidation = {
    params: {
        id: { type: 'string' }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' }
            }
        }
    }
}
const addBlogValidation = {
    body: {
        type: 'object',
        required: [
            'title'
        ],
        properties: {
            title: { type: 'string' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' }
            }
        }
    }
}


module.exports = routes