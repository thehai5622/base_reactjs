import _ from "lodash";
import cookie from "react-cookies";
import { SIDEBAR_ITEM_HREF } from "./constans/sidebar";

/**
 * save object to cookie
 * @param key
 * @param data
 */
function cookieSaveObject(key: any, data: any) {
  //save(key,data,{ path: '/' });
  //cookie.save(key,data,{ path: '/' });
  try {
    cookie.save(key, _.isObject(data) ? JSON.stringify(data) : data, {
      path: SIDEBAR_ITEM_HREF.home,
    });
  } catch (e) {
    console.log("Cannot save data to local cookie", e);
  }
}

/**
 * read cookie
 * @param key
 * @returns {any}
 */
function cookieReadObject(key: any): any {
  if (cookie == null) {
    throw new Error("fail to read object to Cookie");
  }
  //load cookie from brower
  let result = cookie.load(key);
  try {
    return JSON.parse(result);
  } catch (e) {
    return result;
  }
}

/**
 * delete cookie
 * @param key
 * @constructor
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ClearCookieObject(key: any) {
  //clear cookie
  cookie.remove(key, { path: SIDEBAR_ITEM_HREF.home });
}

/**
 * check if we can use localStorage
 * @returns {boolean}
 */
function isLocalStorageAvailable() {
  try {
    localStorage.setItem("test", "test");
    localStorage.setItem("test", "");

    return true;
  } catch (e) {
    return false;
  }
}

/**
 * save object to local storage
 * @param key
 * @param data
 */
function localStorageSaveObject(key: any, data: any) {
  try {
    localStorage.setItem(key, _.isObject(data) ? JSON.stringify(data) : data);
  } catch (e) {
    console.log("Cannot save data to local storage", e);
  }
}

/**
 * read localStorage
 * @param key
 * @returns {any}
 */
function localStorageReadObject(key: any) {
  if (localStorage == null || typeof key !== "string") {
    throw new Error("fail to read object to localStorage");
  }

  let result: string = localStorage.getItem(key) || "";

  try {
    return JSON.parse(result);
  } catch (e) {
    return result;
  }
}

/**
 * Singleton LocalStore
 * @type {{getInstance}}
 */
const LocalStore = (function () {
  let instance: any;

  function createInstance() {
    let object: any = {};

    if (isLocalStorageAvailable()) {
      object.save = localStorageSaveObject;
      object.read = localStorageReadObject;
    } else {
      object.save = cookieSaveObject;
      object.read = cookieReadObject;
    }

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default LocalStore;
