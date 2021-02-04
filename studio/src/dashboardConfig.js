export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601c0497d0c070877d88b2f8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y5jxsqst',
                  apiId: '5b6322ac-7345-4d0d-ba8f-894ede280c0a'
                },
                {
                  buildHookId: '601c04979cef8721a6685c48',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jguo4if4',
                  apiId: '923b9470-6c06-4972-ab4d-193e6e4874c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rtroman14/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jguo4if4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
