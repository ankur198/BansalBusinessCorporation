/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        internal: {
            onTop: true,
            images: [
                "brother.png",
                "canon.png",
                "dell.png",
                "epson.png",
                "honeywell.png",
                "hp.png",
                "intex.png",
                "logitech.png",
                "luminous.png",
                "microtek.png",
                "prodot.png",
                "ricoh.png",
                "samsung.png",
                "sharp.png",
                "tvs.png",
                "xerox.png",
                "zebra.png"
            ]
        },
        brandName: "Bansal Business Corporation",
        contact: "011-49044230",
        address:
            "D21, Mahalaxmi Nagar, Malviya Nagar, Jaipur - 302017 (Behind World Trade Park), Rajasthan, India",
        email: "abc@xyz.com",
        products: [
            {
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
                    "Barcode Scanner": [
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
                "Compatible Consumables": {
                    Cartridges: ["Prodot", "Lipi"],
                    "Ribbon Cartridges": ["Prodot", "Lipi"]
                }
            },

            {
                "Keyboard & Mouse": {
                    "All Wired and Wireless Combo and Individual": [
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
                    "Headphones / Earphones": ["Logitech", "HP", "IBall"],
                    Webcams: ["Logitech"]
                },
                TFT: [
                    "HP Consumer",
                    "HP Commercial",
                    "Dell",
                    "LG",
                    "Samsung",
                    "AOC",
                    "Acer"
                ],

                "Storage Device": {
                    HDD: ["Seagate", "WD", "Samsung", "Toshiba"],
                    SSD: ["Seagate", "WD", "Samsung", "Toshiba"],
                    PenDrives: ["SanDisk", "HP", "Kingston"],
                    "CD/DVD": ["Writex"]
                },
                "Computing Device": {
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
        ]
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
