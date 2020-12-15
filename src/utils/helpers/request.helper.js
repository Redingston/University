import { get, post, put, delete as del } from 'axios';
import { get as getCookies } from 'js-cookies';

import {api} from 'assets/constants';

const getHeaders = () =>{
	const token = getCookies('token')

	if (typeof(token) != 'undefined') {
		return {
			headers:{
				Authorization: `Bearer ${token}`
			}
		}
	}

	return null;
}