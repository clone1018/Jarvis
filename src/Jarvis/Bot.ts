/// <reference path="../.ts/node.d.ts" />
/// <reference path="../.ts/js-yaml.d.ts" />
/// <reference path="../.ts/mongoose.d.ts" />
/// <reference path="../.ts/irc.d.ts" />
/// <reference path="../.ts/bunyan.d.ts" />
/// <reference path="../.ts/underscore.d.ts" />

import events = require('events');
import path = require('path');
import fs = require('fs');
import irc = require('irc');
import PluginManager = require('PluginManager');
import _ = require('underscore');

export class Bot {

    PluginManager: PluginManager.PluginManager;

    events: events.EventEmitter;

    configDir: string;

    log: any;
    chatLog: any;

    config: any;
    plugins: any;
    hooks: any;
    database: any;
    client: any;

    constructor() {
        // Load Our Stuff
        this.PluginManager = new PluginManager.PluginManager();
        this.events = new events.EventEmitter();

        var config = require('../../config/config.json');

        this.config = config;
        this.plugins = this.config.plugins;
    }

    public spawn() {
        var config = this.config;
        var network = this.config.networks[0];

        this.client = new irc.Client(network.host, network.nick, network);

        this.client.addListener('raw', function(...args) {
            console.log(args);
        });

        /**
         * Sends errors to plugins and if debug show them
         */
        this.client.addListener('error', function (message) {
            console.warn(message);
        });
    }

}

interface Channel {

}

interface User {

} 