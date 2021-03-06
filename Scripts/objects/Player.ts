import { GameObject } from "../engine/GameObject.js";
import { Mover } from "../engine/components/Mover.js";
import { SpriteRenderer } from "../engine/components/SpriteRenderer.js";
import { Collider } from "../engine/components/Collider.js";

export class Player extends GameObject {
	private _spriteRenderer: SpriteRenderer;

	constructor() {
		super();

		this._spriteRenderer = new SpriteRenderer(this, {
			images: ["./Assets/images/AgentMorris_SpriteSheet.png"],
			frames: { width: 64, height: 64 },
			animations: {
				idle: [0, 1, undefined, 0.1],
				walk: [2, 3, undefined, 0.2],
				run: [2, 3, undefined, 0.4],
			}
		});

		this.addComponent(SpriteRenderer, this._spriteRenderer);

		this.addComponent(Collider, new Collider(this, {
			tag: "player",
			isTrigger: false,
			width: 26,
			height: 28,
			offset: { x: 19, y: 36 }
		}));

		this.addComponent(Mover, new Mover(this));

		this._init();
	}

	private _init(): void {
		this._spriteRenderer.sprite.gotoAndPlay("idle");
	}
}
