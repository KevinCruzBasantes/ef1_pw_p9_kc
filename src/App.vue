<template>

  <div class="app-container">

    <FormularioComponent @agregar-candidato="agregarCandidato" />


    <TablaComponent :candidatos="candidatos" />
  </div>
</template>

<script>


import FormularioComponent from "./components/FormularioComponent.vue";
import TablaComponent from "./components/TablaComponent.vue";

export default {
  components: {
    FormularioComponent,
    TablaComponent
  },


  data() {
    return {
      candidatos: []
    };
  },

  methods: {

    agregarCandidato(candidato) {
      this.candidatos.push(candidato);
    }
  }
};
</script>
<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding: 40px;
}
</style>