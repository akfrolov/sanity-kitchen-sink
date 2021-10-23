export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6173edfe40ba112ab7ff90e8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tvg9zuj9',
                  apiId: 'd8be3186-e2c6-4c9c-a0f8-fa9644d9280d'
                },
                {
                  buildHookId: '6173edfea5f84b5f72e14561',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-n49nsnpx',
                  apiId: '44354c47-94f1-4801-b91a-703fa0576308'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ol8vil/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-n49nsnpx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
