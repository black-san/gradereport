<template>
    <div>{{groups}}</div>
</template>

<script>
import store from './store'

export default {
    name: 'GradeReport',
    data () {
        return {
            msg: 'dd',
            groups: {},
            members: {}
        };
    },
    created() {
        this.fecth()
        console.log("Created")
    },
    methods: {
        fecth() {
            store.dispatch("fectchGroup")
            store.dispatch("fetchMember")
            this.groups = store.getters.groups;
            this.members = store.getters.members;
        }
    }
}
</script>