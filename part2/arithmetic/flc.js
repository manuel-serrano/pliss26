/*=====================================================================*/
/*    serrano/diffusion/talk/pliss26/part2/arithmetic/flc.js           */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Sep 17 17:23:15 2025                          */
/*    Last change :  Wed May 20 14:54:42 2026 (serrano)                */
/*    Copyright   :  2025-26 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    FL C implementation                                              */
/*=====================================================================*/

/*---------------------------------------------------------------------*/
/*    import ...                                                       */
/*---------------------------------------------------------------------*/
import * as impress from "@hop/hopimpress";
import { LSTINPUTLISTING } from "../listings.js";
export { flc };

/*---------------------------------------------------------------------*/
/*    flc ...                                                          */
/*---------------------------------------------------------------------*/
const flc = <impress.slide title="fst C implementation" class="oopsla25">

   <div class="title">C <span class="important">fst</span> implementation</div>
   <lstinputlisting language="c" src=${require.resolve("src/fstc.c")} step="1-" linerange="1-6"/>
   <lstinputlisting language="c" src=${require.resolve("src/fstc.c")} step="2-" linerange="10-15"/>
   <lstinputlisting language="c" src=${require.resolve("src/fstc.c")} step="3-" linerange="16-24"/>

</impress.slide>
   
/*---------------------------------------------------------------------*/
/*    css ...                                                          */
/*---------------------------------------------------------------------*/
flc.css = <style>
[data-step="3"] {
   top: -7ex;
   transition: 1s all;
}

.small .listings {
   font-size: 25%;
}

</style>;
