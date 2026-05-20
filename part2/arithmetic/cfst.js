/*=====================================================================*/
/*    serrano/diffusion/talk/oopsla25/slides/c.js                      */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Thu Oct  2 12:28:31 2025 (serrano)                */
/*    Copyright   :  2025 Manuel Serrano                               */
/*    -------------------------------------------------------------    */
/*    C implementation                                                 */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { c };

/*---------------------------------------------------------------------*/
/*    c ...                                                            */
/*---------------------------------------------------------------------*/
const c = <impress.slide title="C implementation">

   <div class="title"><span class="important">C</span> compilation</div>
   <lstinputlisting language="c" src="src/c.c" step="1-"/>
   <lstinputlisting language="c" src="src/c.h" step="2-"/>

   <div class="title" step="3-"><span class="important">C</span> boxing</div>
   <div class="small" step="4-">
      <lstinputlisting language="c" src="src/boxing.h"/>
   </div>
   
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
c.css = <style>
[data-step="4"] {
   top: -7.5ex;
   transition: 1s all;
}

.small .listings {
   font-size: 25%;
}

.union {
   background: var(--greydark);
   font-weight: bold;
   border-radius: 4px;
   font-size: 95%;
   color: white;
   padding: 0 4px 0 4px;
}

.header {
   text-decoration: underline;
   text-decoration-color: var(--red);
}
</style>;
