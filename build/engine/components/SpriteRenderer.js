import { GameComponent } from "../GameComponent.js";
import { EventName } from "./EventName.js";
export class SpriteRenderer extends GameComponent {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(gameObject, spriteSheetData) {
        super(gameObject);
        // https://www.createjs.com/docs/easeljs/classes/SpriteSheet.html
        const spriteSheet = new createjs.SpriteSheet(spriteSheetData);
        this._sprite = new createjs.Sprite(spriteSheet);
        // TODO: Don't hard-code regXY values
        this.sprite.regX = 32;
        this.sprite.regY = 32;
        this._facingRight = true;
        this.gameObject.container.addChild(this.sprite);
        this.gameObject.eventManager.addListener(EventName.Transform_PositionChange, data => {
            this.sprite.x = data.x;
            this.sprite.y = data.y;
        });
        this.gameObject.eventManager.addListener(EventName.Mover_Turned, data => {
            this.facingRight = data.facingRight;
        });
        this.gameObject.eventManager.addListener(EventName.Mover_StartWalk, () => {
            this.sprite.gotoAndPlay("walk");
        });
        this.gameObject.eventManager.addListener(EventName.Mover_StopWalk, () => {
            this.sprite.gotoAndPlay("idle");
        });
    }
    get sprite() {
        return this._sprite;
    }
    get facingRight() {
        return this._facingRight;
    }
    set facingRight(toggle) {
        this._facingRight = toggle;
        this.sprite.scaleX = (toggle ? 1 : -1);
    }
}
//# sourceMappingURL=SpriteRenderer.js.map