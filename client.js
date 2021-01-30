"use strict"; 
const fs = require('fs');
const db = require('./utils/db.json');
const fetch = require('node-fetch');
const system = require('./system.json');
const error = require('./utils/error');
const Shout = require('./utils/Shout');
const chalk = require('chalk');
const pkg = require('./package.json');
const npmReg = 'http://registry.npmjs.org/' + pkg.name;


async function searchForVersion(){
    try {
        return new Promise(resolve => {
            fetch(npmReg, {}).then(res => res.json()).then(data => {
                const liveVersion = data["dist-tags"].latest;
                const currentVersion = pkg.version;
                if(liveVersion !== currentVersion){
                    Shout(`Update required!\nCurrent Version: ${currentVersion} New Version: ${liveVersion}\nUpdate by executing: npm i ${pkg.name}@${liveVersion}`)
                }
            }).catch((e) => {
                error(e)
            })
        })
    } catch(e) {
        error(e)
    }
}
searchForVersion();


class Client {
    /**
     * @param {string} database The name for the database
     * @param {boolean} debug Enable debug mode.
     */
    constructor(database, debug){
        this.database = database;
        this.debug = debug;
    }

    /**
     * @param {string} uid The user uid you want to get the userprofile of.
     */
    
    getUser(uid){
        try {

        } catch(e) {
            error(e)
        }
    }

}


module.exports = Client;