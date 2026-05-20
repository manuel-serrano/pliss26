obj_t make_fixnum(long x) {
   obj_t o = #@important#GC_malloc#/@important#(sizeof(struct fixnum));
   o->header = HEADER_FIXNUM;
   o->fixnum.value = x;
   return o;
}

bool_t fixnump(obj_t o) {
   return o->header == HEADER_FIXNUM;
}

obj_t addfx(obj_t x, obj_t y) {
   return make_fixnum(x->fixnum.value + y->fixnum.value);
}
