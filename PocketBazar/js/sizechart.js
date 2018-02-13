var schart = function () {
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
        var modal1 = $('<div id="tncModal" class="modal">\n' +
            '                            <!-- Modal content -->\n' +
            '                            <div class="modal-content">\n' +
            '                                <div class="modal-header">\n' +
            '                                    <span class="close" id="closeTnc">&times;</span>\n' +
            '                                    <h2 style="text-align: center">Size Chart</h2>\n' +
            '                                </div>\n' +
            '                                <div class="modal-body">\n' +
            '                                   <img src="/PocketBazar/images/discount-img.png">\n' +
            // '                                    <p style="text-align: justify">PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OR REGISTERING ON THE WEBSITE OR ACCESSING ANY MATERIAL, INFORMATION OR SERVICES THROUGH THE WEBSITE. IF YOU DO NOT AGREE WITH THESE TERMS OF USE, PLEASE DO NOT USE THE WEBSITE.</p>\n' +
            // '                                    <br>\n' +
            '                                </div>\n' +
            // '                                <div class="modal-footer">\n' +
            // '                                    <h3>Modal Footer</h3>\n' +
            // '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>');
        $('body').append(modal1); // when selecting any tags we dont use any selector just the tag like body

        // we sould add the selectors after the html (i.e. modal) is in the body
        this.btn = $(".schartbtn");
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