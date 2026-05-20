typedef #@union#union#/@union# {
   long #@header#header#/@header#;
   
   struct fixnum {
      long #@header#header#/@header#;
      long value;
   } fixnum;

   struct flonum {
      long #@header#header#/@header#;
      double value;
   } flonum;
       
   struct vector {
      long #@header#header#/@header#;
      obj_t value[];
   } vector;

   #@vdots##/@vdots#
} *obj_t;
