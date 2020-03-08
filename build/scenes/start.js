"use strict";
var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        // constructors
        constructor() {
            super();
            this.Start();
        }
        // private methods
        // public methods
        Start() {
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 320, 240, true);
            this._startButton = new objects.Button("StartButton", 320, 360, true);
            this.Main();
        }
        Update() {
        }
        Reset() {
        }
        Destroy() {
            this.removeAllChildren();
        }
        Main() {
            console.log(`Starting - START SCENE`);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map