<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const object = reactive({ foo: 'bar' });

    return { count, object };
  },
};

</script>
<style scoped>

</style>
