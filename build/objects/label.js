"use strict";
var objects;
(function (objects) {
    class Label extends createjs.Text {
        // constructors
        constructor(text, fontSize, fontFamily, fontColour, x = 0, y = 0, isCentered = false) {
            super(text, fontSize + " " + fontFamily, fontColour);
            this.isCentered = isCentered;
            this._initialize();
            if (isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }
            this.x = x;
            this.y = y;
        }
        // private methods
        _initialize() {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
        }
        // public methods
        Start() {
        }
        Update() {
        }
        Reset() {
        }
    }
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map