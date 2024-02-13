<script lang="ts">
    import { onDestroy } from "svelte";
    import contactStore from "../stores/Contact.store";
    import type { Contact } from "../types/Contact";

    let name = "";
    let phone = "";
    let description = "";

    $: title = $contactStore.editId ? "Edit" : "Add Contact";

    function handleSubmit() {
        let contact: Contact = {
            id: "",
            name,
            phone,
            description,
        };
        if ($contactStore.editId === undefined) {
            contactStore.add(contact);
        } else {
            contactStore.edit(contact);
        }

        name = "";
        phone = "";
        description = "";
    }

    const unsub = contactStore.subscribe(({ contacts, editId }) => {
        if (!editId) return;

        const contact = contacts.find((c) => c.id === editId);

        name = contact?.name || "";
        phone = contact?.phone || "";
        description = contact?.description || "";
    });

    onDestroy(() => {
        unsub();
    });
</script>

<div class="row">
    <div class="column">
        <h3>{title}</h3>
    </div>
</div>

<div class="row">
    <div class="column">
        <form on:submit|preventDefault={handleSubmit}>
            <fieldset>
                <label for="nameField">Name</label>
                <input
                    type="text"
                    placeholder="[Enter name here]"
                    id="nameField"
                    bind:value={name}
                />

                <label for="phoneField">Phone</label>
                <input
                    type="text"
                    placeholder="555-5555"
                    id="phoneField"
                    bind:value={phone}
                />

                <label for="descriotionField">Description</label>
                <textarea id="descriotionField" bind:value={description}
                ></textarea>

                <button class="button" type="submit">{title}</button>
            </fieldset>
        </form>
    </div>
</div>
