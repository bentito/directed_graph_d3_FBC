d3.json("catalog.json").get(function (error, data) {
    let package;
    let bundles = []
    let channels = {}
    let defaultChannel

    for (let object_idx in data) {
        if (data[object_idx]["schema"] === "olm.package") {
            package = data[object_idx]["name"]
            defaultChannel = data[object_idx]["defaultChannel"]
        }
        if (data[object_idx]["schema"] === "olm.bundle") {
            bundles.push(data[object_idx]["name"])
        }
        if (data[object_idx]["schema"] === "olm.channel") {
            let channelEntries = []
            let entries = data[object_idx]["entries"]
            for (let entry_idx in data[object_idx]["entries"]) {
                let channelEntry = {
                    bundleName : "",
                    replaces : "",
                    skips : "",
                    skipRange : ""
                }
                channelEntry.bundleName = entries[entry_idx]["name"]
                channelEntry.replaces = entries[entry_idx]["replaces"]
                channelEntry.skips = entries[entry_idx]["skips"]
                channelEntry.skipRange = entries[entry_idx]["skipRange"]
                channelEntries.push(channelEntry)
            }
            let channelName = data[object_idx]["name"]
            let channelNameStripped = channelName.replace(/['"]+/g, '')
            channels[channelNameStripped] = channelEntries
        }
    }
    console.log(package)
    console.log(bundles)
    console.log(defaultChannel)
    console.log(channels)
});