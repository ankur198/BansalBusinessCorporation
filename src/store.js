import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        brandName: "Bansal Business Corporation",
        contact: "+91-987654321",
        products: {
            printers: ["Inkjet Printers", "Laser Printer", "Duplex Printer"],
            laptops: ["Ankur Properties", "Shweta Laptop", "Sumit Flat"],
            mouse: ["Aishwarya", "Aishi", "Aish"],
            keyboard: ["Inkjet", "Printer", "Duplex Printer"]
        }
    },
    mutations: {},
    actions: {}
});
