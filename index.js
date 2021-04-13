Vue.createApp({
    data() {
        return {
            tanya: true,
            john: false
        }
    },
    methods: {
        prev() {
            this.tanya = !this.tanya;
            this.john = !this.john;
        }
    }
}).mount("#testimonials");