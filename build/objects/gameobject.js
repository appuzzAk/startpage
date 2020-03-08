"use strict";
var objects;
(function (objects) {
    class GameObject extends createjs.Bitmap {
        // constructors
        constructor(imageString) {
            super(managers.Game.AssetManager.getResult(imageString));
            this.name = imageString;
            this._initialize();
        }
        // private methods`
        _initialize() {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.isColliding = false;
        }
        // public methods
        Start() {
        }
        Update() {
        }
        Reset() {
        }
    }
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map