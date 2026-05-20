bool_t fast_flonump(obj_t o) {
   return o >> 59 & 7 == 0x0
       || o >> 59 & 7 == 0x3
       || o >> 59 & 7 == 0x4;
}
