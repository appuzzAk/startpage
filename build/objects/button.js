"use strict";
var objects;
(function (objects) {
    class Button extends objects.GameObject {
        // constructors
        /**
         * Creates an instance of Button.
         * @param {string} imagePath
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor(imagePath, x = 0, y = 0, isCentered = false) {
            super(imagePath);
            this.isCentered = isCentered;
            if (isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this._MouseOver);
            this.on("mouseout", this._MouseOut);
        }
        // private methods
        _MouseOver() {
            this.alpha = 0.7; // change alpha transparency to 70%
        }
        _MouseOut() {
            this.alpha = 1.0; // change alpha transparency to 100%
        }
        // public methods
        /**
         * The Start Method performs object initialization
         *
         * @returns {void}
         */
        Start() {
        }
        Update() {
        }
        Reset() {
        }
    }
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map