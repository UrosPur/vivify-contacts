<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <router-link class="navbar-brand" to="/"> My contacts</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/contacts"> Contacts</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/add-contact"> Add Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>

</style>