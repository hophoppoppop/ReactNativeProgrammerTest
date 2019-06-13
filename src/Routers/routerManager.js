import React, {Component} from 'react';
import {ScrollView, View, Dimensions, Platform, ToastAndroid, Text, BackHandler, Linking} from 'react-native';
import StackViewStyleInterpolator  from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as ROUTERLIST from './routerList';

//store
import {observer} from 'mobx-react';

//service
import NavigatorService from './navigator';

//page
import NavigatorPage from '../Pages/NavigatorPage';

//Mengubah pemanggilan this.props.navigation.params jadi this.props
const mapNavigationStateParamsToProps = (ScreenComponent) => {
    return class extends Component {
        static navigationOptions = ScreenComponent.navigationOptions;
        render() {
            const { params } = this.props.navigation.state;
            return <ScreenComponent {...this.props} {...params} />
        }
    }
};

const Router = createAppContainer(createStackNavigator({
        NavigatorPage: { screen: mapNavigationStateParamsToProps(NavigatorPage) },
    },
    {
        initialRouteName: "NavigatorPage",
        headerMode: 'none',
        transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal }),
    },));


const prevGetStateForActionHomeStack = Router.router.getStateForAction;
Router.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return prevGetStateForActionHomeStack(action, state);
}

@observer
export default class RouterManager extends Component{

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        /*f (this.props.basket !== undefined && this.props.basket.length !== nextProps.basket.length) {
            console.log(nextProps.basket.length);
            let title = '(' + nextProps.basket.length + ')';
            NavigatorService.refresh({rightTitle: title});
        }*/
    }

    render() {
        return (
            <Router ref={navigatorRef => {
                NavigatorService.setContainer(navigatorRef);
            }}/>
        )
    }
};

//export const Drawer =

export const RouterDirector = (RouterList, Props) => {
    switch (RouterList) {
        case ROUTERLIST.NAVIGATOR_PAGE :
            NavigatorService.reset('NavigatorPage', Props);
            break;
    }
};

export const PagePop = async () => {
    await setTimeout(()=>{
        NavigatorService.pop();
    });
};

export const OpenDrawer = () => {
    NavigatorService.navigate('DrawerOpen');
};

export const CloseDrawer = () => {
    NavigatorService.navigate('DrawerClose');
};

export const PagePopTo = (key,props) => {
    NavigatorService.pop(props,key);
};

export const Replacing = (key,props) => {
    NavigatorService.replace(key,props);
};

export const GetCurrentScene = () => {
    return NavigatorService.currentScene();
};


export const PagePopRefresh = (props) => {
    NavigatorService.pop(props);
};