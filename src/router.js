import React from 'react';
import {StackNavigator} from 'react-navigation';
import Category from './component/category';
import Home from '../App.js';

export const HomeStack = StackNavigator(
	{
		Screen_Cate: {
			screen: Category
		},
		Home: {
			screen: Home
		}
	},
	{
    	initialRouteName: 'Home',
 	}

)