
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/app-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/login"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/sign-up"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/user-view"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/user-edit"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/team-view"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/team-edit"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/team-add"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/task-view"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/task-edit"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/task-add"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/project-view"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/project-edit"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/app-project/project-add"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 862, hash: '0846ea6e3f2bf1e268d73be68a9ba2031dbdd275de0c99687ce4f4d9270c52a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '266630b4a49c3924ef7dc19aadb54bbe0ac6ffc88fb852b01ee74eed0a4b17bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-HXER4HUN.css': {size: 210, hash: 'cmb9bNCT7pw', text: () => import('./assets-chunks/styles-HXER4HUN_css.mjs').then(m => m.default)}
  },
};
