<template>

    <div class="containerTabla">
        <h1>Tabla</h1>


        <table class="tabla-candidatos">
            <tr>
                <th>Titulo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Atributo 5</th>
                <th>Atributo 6</th>
            </tr>


            <tr v-for="(c, index) in candidatos" :key="index">
                <td>{{ c.titulo }}</td>
                <td>{{ c.nombre }}</td>
                <td>{{ c.apellido }}</td>
                <td>{{ c.atributo5 }}</td>
                <td>{{ c.atributo6 }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {

    props: {
        candidatos: {
            type: Array,
            required: true
        }
    }
};
</script>
<style>
.tabla-candidatos {
    border: 2px solid blue;
    border-collapse: collapse;
    width: 100%;
    color: blue;
}

.tabla-candidatos th,
.tabla-candidatos td {
    border: 1px solid blue;
    padding: 8px;
    text-align: center;

}
</style>