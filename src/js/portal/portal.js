import * as core from "./core/index";
import * as users from "./users/index";
import * as content from "./content/index";
import * as hosting from "./hosting/index";

import * as info from "./info/index";
import * as utils from "./util/index";

export class Portal {
    constructor(config) {
        // Portal properties.
        config = typeof config !== "undefined" ? config : {};
        this.portalUrl = config.portalUrl;
        this.username = config.username;
        this.token = typeof config.token !== "undefined" ? config.token : "";
        this.withCredentials = false;
        this.jsonp = false;
        this.items = [];
        this.services = [];

        // Core portal methods.
        this.generateToken = core.generateToken;
        this.search = core.search;
        this.self = core.self;
        this.version = core.version;

        // User methods.
        this.userContent = users.userContent;
        this.userProfile = users.userProfile;

        // Content methods.
        this.itemDescription = content.itemDescription;
        this.itemData = content.itemData;
        this.addItem = content.addItem;
        this.updateWebmapData = content.updateWebmapData;
        this.updateDescription = content.updateDescription;
        this.updateData = content.updateData;
        this.updateUrl = content.updateUrl;

        // Hosted Services methods.
        this.serviceDescription = hosting.serviceDescription;
        this.serviceLayers = hosting.serviceLayers;
        this.layerRecordCount = hosting.layerRecordCount;
        this.createService = hosting.createService;
        this.addToServiceDefinition = hosting.addToServiceDefinition;
        this.checkServiceName = hosting.checkServiceName;
        this.harvestRecords = hosting.harvestRecords;
        this.addFeatures = hosting.addFeatures;
        this.cacheItem = hosting.cacheItem;
    }
}

export function itemInfo(type) {
    return info.items(type);
}

// Make the utils available on the core module.
export let util = utils;
