<script>
export default {
  props: {
    page: { type: Number, default: 1 },
    pages: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    records: { type: Number, default: 0 },
    totalRecords: { type: Number, default: 0 },
    loading: { type: Boolean, default: false },
  },
  methods: {
    next() {
      this.$emit('update', { page: Math.min(this.page + 1, this.pages) });
    },
    previous() {
      this.$emit('update', { page: Math.max(this.page - 1, 1) });
    },
    setPage(page) {
      this.$emit('update', { page });
    },
  },
};
</script>
