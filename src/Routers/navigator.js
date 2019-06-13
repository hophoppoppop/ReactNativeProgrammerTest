import { NavigationActions  } from 'react-navigation';
import type { NavigationParams, NavigationRoute } from 'react-navigation';

let _container; // eslint-disable-line

function setContainer(container: Object) {
    _container = container;
}

function reset(routeName: string, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName,
                    params,
                }),
            ],
        }),
    );
}

function navigate(routeName: string, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName,
            params,
        }),
    );
}

function pop(params: NavigationParams, routeName?: string){
    _container.dispatch(
        NavigationActions.back({
            type: 'Navigation/NAVIGATE',
            key:routeName,
            params:params,
        })
    );
}

function navigateDeep(actions: { routeName: string, params?: NavigationParams }[]) {
    _container.dispatch(
        actions.reduceRight(
            (prevAction, action): any =>
                NavigationActions.navigate({
                    type: 'Navigation/NAVIGATE',
                    routeName: action.routeName,
                    params: action.params,
                    action: prevAction,
                }),
            undefined,
        ),
    );
}

function currentScene(): NavigationRoute | null {
    if (!_container || !_container.state.nav) {
        return null;
    }

    return _container.state.nav.routes[_container.state.nav.index].routeName || null;
}

function getScenewithIndex(index){
    if (!_container || !_container.state.nav || _container.state.nav.index < index) {
        return null;
    }

    return _container.state.nav.routes[_container.state.nav.index-index] || null;
}

function replace(routeName: string, params?: NavigationParams) {
    _container.dispatch(
        NavigationActions.replace({
            type: 'Navigation/NAVIGATE',
            routeName,
            params,
        }),
    );
}

export default {
    setContainer,
    navigateDeep,
    navigate,
    reset,
    currentScene,
    getScenewithIndex,
    pop,
    replace
};