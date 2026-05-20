bool_t flonump(obj_t o) {
   return fast_flonump(o) || slow_flonump(o);
}
bool_t fast_flonump(obj_t o) {
   return o & 7 == TAG_FLONUM;
}
bool_t slow_flonump(obj_t o) {
   return o & 7 == TAG_POINTER && o->header == HEADER_FLONUM;
}
double ftod(obj_t o) {
   return fast_flonump(o) ? OBJ_AS_DOUBLE(o) : o->flonum.value;
}
obj_t addfl(obj_t x, obj_t y) {
   return make_flonum(ftod(o) + ftod(y));
}
obj_t make_flonum(double x) {
   long n = DOUBLE_AS_LONG(x);

   if (n & 7 == TAG_FLONUM) {
      return (obj_t)n;
   } else {
      return make_slow_flonum(x);
   }
}
