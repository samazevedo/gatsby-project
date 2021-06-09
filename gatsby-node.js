const path = require('path');
const data = require('./src/data/pageData');

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    console.log('>>>>>>\n\n', data);

    data.forEach(page => {
        createPage({
            path: page.slug,
            component: path.resolve('./src/templates/Generic.js'),
            context: {
                title: page.title,
                description: page.description,
            }
        })

    })

}