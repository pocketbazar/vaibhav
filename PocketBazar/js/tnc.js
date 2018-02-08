var tnc = function () {
    //this.modal = null; // # because its an id
    // Get the button that opens the modal
    this.btn = null;
    // Get the <span> element that closes the modal
    this.span = null; // "." if we use class else #

    this.constructor = function (){
        this.Init();
    };

    this.Init = function () {
        // we will add the html code in html from jquery so you wont have to add the html code each and Every time
        var modal = $('<div id="tncModal" class="modal">\n' +
            '                            <!-- Modal content -->\n' +
            '                            <div class="modal-content">\n' +
            '                                <div class="modal-header">\n' +
            '                                    <span class="close" id="closeTnc">&times;</span>\n' +
            '                                    <h2 style="text-align: center">Terms & Conditions</h2>\n' +
            '                                </div>\n' +
            '                                <div class="modal-body">\n' +
            '                                    <p style="text-align: justify">PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OR REGISTERING ON THE WEBSITE OR ACCESSING ANY MATERIAL, INFORMATION OR SERVICES THROUGH THE WEBSITE. IF YOU DO NOT AGREE WITH THESE TERMS OF USE, PLEASE DO NOT USE THE WEBSITE.</p>\n' +
            '                                    <br>\n' +
            '                                    <ol type="1">\n' +
            '                                       <li>These Terms of Use together with the Privacy Policy available at http://www.pocketbazar.in/page/terms, the Terms of Sale available at http://www.pocketbazar.in/info/terms Of Sale, the other policies of the Website available at www.Pocketbazar.in under "Policy Info" section or elsewhere on the Website, the Seller Agreement available at sellers. pocketbazar.in (applicable if You are a seller of the products on the Website) and any other terms which may apply to specific Services ("Additional Service Terms") together with all other notices, disclaimers, guidelines appearing on the Website from time to time (collectively referred to as "Agreement(s)") constitute the entire agreement upon which You are allowed to access and use the Website and avail the Services. </li>\n' +
            '                                       <br>\n' +
            '                                       <li>If you are accessing the Pocketbazar.in mobile application or accessing the Services through the Pocketbazar.in mobile application, then while these Terms of Use will apply to such use, there may be additional terms (such as the terms imposed by mobile application stores like Apple\'s iTunes, Android\'s play store, Microsoft\'s store from time to time) which will govern the use of the mobile application. These additional terms to the extent applicable are hereby deemed to be incorporated in these Terms of Use by way of reference.</li>\n' +
            '                                       <br>\n' +
            '                                       <li>General \n' +
            '                                       <ol type="i">\n' +
            '                                           <br>\n' +
            '                                           <li>Pocketbazar.in is a company incorporated under the laws of India, with its registered korba. Pocketbazar.in is an intermediary in the form of an online marketplace and is limited to managing the Website to enable seller to exhibit, advertise, display, make available and offer to sell the products and to enable buyer to purchase the products so offered ("Products"), and other incidental Services thereto ("Services") including use of the Website by any User. </li>\n' +
            '                                           <li>These Terms of Use are subject to revision by Pocketbazar.in at any time and hence the Users are requested to carefully read these Terms of Use from time to time before using the Website. The revised Terms of Use shall be made available on the Website. You are requested to regularly visit the Website to view the most current Terms of Use. In the event such a facility is provided on the Website, You can determine when Pocketbazar.in last modified any part of the Agreement by referring to the "Last Updated" legend provided in that document. It shall be Your responsibility to check these Terms of Use periodically for changes. Pocketbazar.in may require You to provide Your direct or indirect consent to any update in a specified manner before further use of the Website and the Services. If no such separate consent is sought, Your continued use of the Website and/or Services, following such changes, will constitute Your acceptance of those changes.</li>\n' +
            '                                           <li>If there is any conflict:\n' +
            '                                               <ol type="a">' +
            '                                                   <li>between the Privacy Policy and any other Agreement, the Privacy Policy shall take precedence\' but only to the extent of the conflict</li>' +
            '                                                   <li>between the Additional Service Terms and any other part of these Terms of Use, the Additional Service Terms shall take precedence in relation to that Service</li>' +
            '                                                   <li>between the Seller Agreement and any other part of these Terms of Use, the Seller Agreement shall take precedence but only to the extent of the conflict</li>' +
            '                                                   <li>between these Terms of Use and any other notices, disclaimers or guidelines appearing on the Website, these Terms of Use shall take precedence but only to the extent of the conflict.</li>' +
            '                                               </ol>' +
            '                                           </li>\n' +
            '                                       </ol>\n' +
            '                                       </li>    \n' +
            '                                    </ol>\n' +
            '                                </div>\n' +
            // '                                <div class="modal-footer">\n' +
            // '                                    <h3>Modal Footer</h3>\n' +
            // '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>');
        $('body').append(modal); // when selecting any tags we dont use any selector just the tag like body

        // we sould add the selectors after the html (i.e. modal) is in the body
        this.btn = $(".tncBtn");
        this.span = $("#closeTnc");
        this.addEventListeners();
    };

    this.addEventListeners = function () {
        // When the user clicks the button, open the modal
        console.log(this.btn);
        this.btn.on("click", function () {
            $('#tncModal').css("display","block");
        });

        // When the user clicks on <span> (x), close the modal
        this.span.on("click", function () {
            $('#tncModal').css("display","none");
        });

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //     if (event.target == this.modal) {
        //         this.modal.style.display = "none";
        //     }
        // }
    }
};