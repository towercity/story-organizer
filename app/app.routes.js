"use strict";
var router_1 = require('@angular/router');
var status_list_component_1 = require('./status-list.component');
var routes = [
    {
        path: '',
        redirectTo: '/status-list',
        pathMatch: 'full'
    },
    {
        path: 'status-list',
        component: status_list_component_1.StatusListComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map