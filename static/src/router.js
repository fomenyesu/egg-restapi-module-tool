import React, { PropTypes } from 'react'
import { Router } from 'dva/router'
import App from './routes/app'

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/tableManager'))
          cb(null, { component: require('./routes/tableManager/') })
        }, 'tableManager')
      },
      childRoutes: [{
          path: 'showApi',
          name: 'showApi',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/showApi'))
              cb(null, require('./routes/showApi/'))
            }, 'showApi')
          },
        },{
          path: 'tableManager',
          name: 'tableManager',
          getIndexRoute (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/tableManager'))
              cb(null, { component: require('./routes/tableManager/') })
            }, 'tableManager')
          },

          childRoutes: [
            {
              path: 'create',
              name: 'tableManagerCreate',

              getComponent(nextState, cb) {
                require.ensure([], require => {
                  registerModel(app, require('./models/tableForm'));
                  cb(null, require('./routes/tableManager/TableForm'))
                }, 'tableManager')
              }
            },
            {
              path: 'edit/:id',
              name: 'tableManagerEdit',

              getComponent(nextState, cb) {
                require.ensure([], require => {
                  registerModel(app, require('./models/tableForm'));
                  cb(null, require('./routes/tableManager/TableForm'))
                }, 'tableManager')
              }
            }
          ]
        }
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
