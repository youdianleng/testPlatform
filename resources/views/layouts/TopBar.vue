<template>
    <div class="container-fluid p-0">
    <Menubar :model="items">
      <template #end>
        <div class="d-flex searchBar">
            <InputText type="text" placeholder="Search" />
            <OverlayBadge value="4" severity="danger" class="inline-flex">
                <Avatar icon="pi pi-user" size="large" />
            </OverlayBadge>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style scope>
.p-menubar{
    background-color: black;
}

.p-menubar-root-list{
    margin: 0px;
}

.p-menubar .p-menuitem-text {
  color: #ffffff; /* Set your desired text color */
}

.p-submenu-list .p-menuitem-text {
    color: black;
}

.p-inputtext{
    width: 100%;
    border-radius:  10px 0px 0px 10px;
}

.p-inputtext:hover{
    border-color: transparent; /* Remove border color change on hover */
    box-shadow: none;          /* Remove box shadow on hover */
}
.p-avatar{
    border-radius: 0px 10px 10px 0px;
}

@media only screen and (max-width: 1200px) {
    .leftDropDown{
        display: hidden;
    }

}



</style>

<script>
import { ref } from "vue";
import {useRouter} from "vue-router";

export default{

setup(){
    const router = useRouter(); 
    const items = ref([
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => router.push('/'),
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U'
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',

        }
    ]);
        return{
            items
        }
}



}

</script>