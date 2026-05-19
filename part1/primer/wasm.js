/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part1/primer/wasm.js              */
/*    -------------------------------------------------------------    */
/*    Author      :  manuel serrano                                    */
/*    Creation    :  Tue May 19 17:24:42 2026                          */
/*    Last change :  Tue May 19 17:36:40 2026 (serrano)                */
/*    Copyright   :  2026 manuel serrano                               */
/*    -------------------------------------------------------------    */
/*    wasm                                                             */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import * as fontifier from "@hop/fontifier";
import { MARKDOWN as MD } from "@hop/markdown";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="Wasm" class="md">
<MD fontifier=${fontifier}>
   ${<div class="center">A perfect fit for Wasm</div>}

  * A Wasm file 
```scheme
;; file.wat
(func $fact (param $x i64) (result i64)
   (if (i64.lt_s (local.get $x) (i64.const 2))
       (then (return (i64.const 1)))
       (else (return (i64.mul (local.get $x)
          (call $fact (i64.sub (local.get $x) (i64.const 1))))))))
```

  * An analyzer
```scheme
(define (search x)
   (when (pair? x)
      (if (eq? (car x) 'local.get)
          x
          (or (search (car x)) (search (cdr x))))))

(search (read "file.wat"))
```

</MD>
</impress.slide>
/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
   transition: 1s all;
}

div[data-step="1"] {
   top: -17ex;
}

pre {
   font-size: 40%;
   margin-left: 2em;
   background-color: white;
}

p {
   margin: 0;
}

.center {
   font-weight: bold;
   color: var(--greydark);
   font-size: 105%;
   margin-bottom: 0.5ex;
}

div.head {
   text-decoration: underline;
   margin-left: 0.5em;
   color: var(--grey);
   font-weight: bold;
   font-size: 80%;
   margin-bottom: 1ex;
}

strong {
   font-style: normal;
   color: var(--red);
}

em {
   font-style: normal;
   color: var(--greydark);
}

ul {
   margin: 1ex;
   list-style: none;
   margin-top: 0;
   font-size: 70%;
}

ul ul {
   margin: 0;
   font-size: 80%;
}

a {
   text-decoration: none;
   color: var(--greydark);
   font-size: 60%;
   font-family: monospace;
}
	       
a:before {
   content: "(";
}

a:after {
   content: ")";
}

code {
   font-family: cmtt;
   color: var(--greyverydark);
}

.fontifier-prog .fontifier-prog-line-comment {
   font-weight: normal;
   color: var(--javascript-color);
   font-style: normal;
}

.dollar:before {
   content: "$";
}

h2 {
   font-size: 80%;
   color: var(--greydark);
   margin-left: 1em;
   margin-bottom: 0;
}
</style>   
