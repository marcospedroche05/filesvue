<template>
    <div>
        <h1>Files Component</h1>
        <form v-on:submit.prevent="subirFichero()">
            <label>Imagen: </label>
            <input type="file" v-on:change="cambiarFichero($event)"/>
            <button>Upload</button>
        </form>
        <br/>
        <img v-if="imagen" :src="imagen"/>
    </div>
</template>

<script>
import FileServices from '@/services/FileServices';
const service = new FileServices();
export default {
    name: "FilesComponent",
    data() {
        return {
            fichero: null,
            imagen: ""
        }
    },
    methods: {
        cambiarFichero(event) {
            this.fichero = event.target.files[0];
        },

        subirFichero() {
            if(this.fichero == null && this.fichero == undefined){
                alert("No se ha modificado el fichero");
            } else {
                let reader = new FileReader();
                reader.onload = () => {
                    let base64String = String(reader.result);
                    let base64Content = base64String.split(",")[1];
                    
                    let imagen = {
                        fileName: this.fichero.name,
                        fileContent: base64Content
                    }

                    service.sendImage(imagen).then(result => {
                        console.log(result);
                        alert("Imagen subida correctamente");
                    })

                    this.imagen = reader.result;
                }
                reader.readAsDataURL(this.fichero);
            }
        }
    }
}
</script>

<style>

</style>