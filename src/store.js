import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        internal: {
            onTop: true
        },
        brandName: "Bansal Business Corporation",
        contact: "+91-987654321",
        products: {
            one: {
                printer: {
                    HP: [
                        "Inkjet Printer",
                        "Tank Printer",
                        "Laser Consumer Printer",
                        "Laser Commercial Printer"
                    ],
                    Brother: [
                        "Laser Printer",
                        "Laser Printer Box Series",
                        "Tank Printer"
                    ],
                    Epson: ["Tank and Photo Printers", "Thermal Printer"],
                    Canon: ["Laser Printer", "Tank Printer", "Inkjet Printer"],
                    TVSE: ["Thermal Printer", "Barcode Label Printer"],
                    TSE: ["Barcode Label Printer"],
                    Samsung: ["Laser Printer"],
                    Zebra: ["Barcode Label Printer"]
                },
                Scanner: {
                    Scanner: ["HP", "Brother", "Epson", "Canon", "Kodak"],
                    Barcode_Scanner: [
                        "TVS (Wired/BT/1D/2D)",
                        "Honeywell (Wired/BT/1D/2D)",
                        "Restall"
                    ]
                },
                UPS: ["IBall", "Intex", "Luminous", "Microtek", "APC"],
                Consumables: {
                    Cartridges: [
                        "HP",
                        "Canon",
                        "Brother",
                        "Epson",
                        "Ricoh",
                        "Xerox",
                        "Sharp"
                    ],
                    "Ribbon Cartridges": [
                        "TVS",
                        "Epson",
                        "Tally",
                        "Lipi",
                        "Printonix"
                    ]
                },
                CompatibleConsumables: {
                    Cartridges: ["Prodot", "Lipi"],
                    RibbonCartridges: ["Prodot", "Lipi"]
                }
            },

            two: {
                Keyboard_Mouse: {
                    All_Wired_and_Wireless_Combo_and_Individual: [
                        "Logitech",
                        "Dell",
                        "Lenovo",
                        "TVS",
                        "HP",
                        "Prodot",
                        "Intex",
                        "Lipi",
                        "IBall"
                    ]
                },
                Headset: {
                    Headphones_Earphones: ["Logitech", "HP", "IBall"],
                    Webcams: ["Logitech"]
                },
                TFT: [
                    "HP Consumer",
                    "HP Commercial",
                    "Dell",
                    "LG",
                    "Samsumg",
                    "AOC",
                    "Acer"
                ],

                StorageDevice: {
                    HDD: ["Seagate", "WD", "Samsung", "Toshiba"],
                    SSD: ["Seagate", "WD", "Samsung", "Toshiba"],
                    PenDrives: ["SanDisk", "HP", "Kingston"],
                    "CD/DVD": ["Writex"]
                },
                ComputingDevice: {
                    Laptop: ["Dell", "HP", "Lenovo", "Acer", "Asus"],
                    Desktop: ["HP", "Dell", "Lenovo"],
                    "All in One": ["HP", "Dell", "Lenovo"]
                },
                Others: [
                    "Antivirus",
                    "RAM",
                    "Motherboard",
                    "Processor(Intel/AMD)",
                    "Cables",
                    "Networking Equipments"
                ]
            }
        }
    },
    getters: {
        navOnTop: state => state.internal.onTop
    },
    mutations: {
        changeNavHeading: function(state, onTop) {
            state.internal.onTop = onTop;
        }
    },
    actions: {}
});
