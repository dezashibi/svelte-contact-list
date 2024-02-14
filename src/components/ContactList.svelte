<script lang="ts">
    import contactStore from "../stores/Contact.store";

    function onSelectForEdit(id: string) {
        contactStore.selectContact(id);
    }

    function onDelete(id: string) {
        contactStore.delete(id);
    }
</script>

{#each $contactStore.contacts as contact (contact.id)}
    <div class="row">
        <div class="column">
            Name: {contact.name}
        </div>
        <div class="column">
            Phone: {contact.phone}
        </div>
    </div>
    <div class="row">
        <div class="column">
            Description: {contact.description}
        </div>
    </div>
    <div class="row">
        <div class="column">
            <button on:click={() => onSelectForEdit(contact.id)} class="button">
                Edit
            </button>
            <button on:click={() => onDelete(contact.id)} class="button">
                Delete
            </button>
        </div>
    </div>
{/each}
