<template>
    <div class="containerFormulario">
        <h1>Formulario</h1>

        <form @submit.prevent class="formu">
            <div class="encabezado">
                <b>Fotografia</b>
                <img :src="foto" alt="no se muestra">
            </div>

            <p>Titulo</p>
            <input type="text" v-model="titulo">

            <p>Nombre</p>
            <input type="text" v-model="nombre">

            <p>Apellido</p>
            <input type="text" v-model="apellido">

            <p>Atributo 5</p>
            <input type="text" v-model="atributo5">

            <p>Atributo 6</p>
            <input type="text" v-model="atributo6">

            <div class="botones">
                <button type="button" @click="buscar">Buscar</button>
                <button type="button" @click="agregar">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script>


import { consultarApiFacade } from "../clients/ApiCliente.js"

export default {

    emits: ["agregar-candidato"],


    data() {
        return {
            foto: "",
            titulo: "",
            nombre: "",
            apellido: "",
            atributo5: "",
            atributo6: "",
        };
    },

    methods: {

        async buscar() {
            const res = await consultarApiFacade();
            const user = res.results[0];

            this.foto = user.picture.large;
            this.titulo = user.name.title;
            this.nombre = user.name.first;
            this.apellido = user.name.last;

            this.atributo5 = user.dob.age;
            this.atributo6 = user.cell;
        },

        agregar() {
            const candidato = {
                titulo: this.titulo,
                nombre: this.nombre,
                apellido: this.apellido,
                atributo5: this.atributo5,
                atributo6: this.atributo6,
            };

            this.$emit("agregar-candidato", candidato);
        }
    }
};
</script>
<style>
.formu {
    border: 1px solid blue;
    padding: 20px;
    border-radius: 40px;

}

p {
    color: blue;
}

b {
    color: blue;
}

img {
    border: 1px solid blue;
    width: 70px;
    height: 70px;
    border-radius: 15px;
}

input {
    border-color: blue;
    border-radius: 5px;
    padding: 5px;
}

button {
    color: white;
    background-color: blue;
    margin: 10px;
    font-size: 18px;
    border-radius: 5px;
}

.encabezado {
    display: flex;
    gap: 20px;
}

.botones {
    display: flex;
    margin-top: 20px;


}
</style>
