<script lang="ts">
    import ContactForm from "./components/ContactForm.svelte";
    import ContactList from "./components/ContactList.svelte";
</script>

<div class="row">
    <div class="column">
        <h1>Contact List</h1>
    </div>
</div>

<ContactForm />
<ContactList />

<style>
    h1 {
        text-align: center;
    }
</style>
