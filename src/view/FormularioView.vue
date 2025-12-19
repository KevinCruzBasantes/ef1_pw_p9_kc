<script>
import { consultarApiFacade } from "../clients/ApiCliente.js";

export default {
    props: {
        agregarCandidato: {
            type: Function,
            required: true
        }
    },

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

            this.agregarCandidato(candidato);
        }
    }
};
</script>
