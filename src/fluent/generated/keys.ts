import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "e4f1de39c9634c95aa8a0f1f26a2c9d0"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "6baceef299fb4408b7bdf28af3f272d7"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "7cc7c838cee74910aaa2e67b1078cced"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "0a7f4ef2267b4b11804ca9ac8aa31463"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "7760553ad119470bb73a84a874ada195",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "97fd105d2a3d45aeb08e7b098b12ac86",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "418571c8e182428898ff66035aa7e3bb",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
