obj_t make_fixnum(long x) { return (x << 1) | #@tag#1#/@tag#; }
bool_t fixnump(obj_t o) { return o & #@tag#1#/@tag#; }
obj_t addfx(obj_t x, obj_t y) { return x - 1 + y; }

