/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/tagging.js       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:44:53 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    C implementation                                                 */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { tagging };

/*---------------------------------------------------------------------*/
/*    tagging ...                                                      */
/*---------------------------------------------------------------------*/
const tagging = <impress.slide title="tagging" class="oopsla25">

   <div class="title">Tagging</div>
   <ul class="center">
     <li step="1-"> Trading value space for efficiency </li>
     <li step="2-"> Alignment contraints </li>
   </ul>
   
   <div class="svgbg" step="3-">
     <svg:img width="90%" src=${require.resolve("../svg/tagging.svg")}/>
   </div>
   
   <lstinputlisting language="c" src=${require.resolve("src/tagging.c")} linerange="1-3" step="4-"/>

   <ul class="center" step="5-">
     <li> Trading even more values </li>
   </ul>
   
   <div class="svgbg" step="6-">
     <svg:img width="90%" src=${require.resolve("../svg/tagging2.svg")}/>
   </div>
   
</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
tagging.css = <style>
.title {
   margin-bottom: 1ex;
}

div.svgbg {
   background-color: white;
   border: 1px solid var(--red);
   border-left: 8px solid var(--red);
   padding: 8px 4px 4px 4px;
   width: 95%;
   margin-left: auto;
   margin-right: auto;
}

svg .fst {
   color: var(--red);
}

svg .tag {
   color: var(--red);
}

.tag {
   color: var(--red);
}

[data-step="6"] {
   top: -14.5ex;
   transition: 1s all;
}
</style>;
