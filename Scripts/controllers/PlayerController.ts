import { Player } from "../objects/Player.js";
import { KeyboardInput, KeyMap } from "./KeyboardInput.js";
import { MoveDirection } from "../engine/components/Mover.js";
import { EventName } from "../engine/components/EventName.js";

export class PlayerController {
	private _player: Player;

	private _keyboardInput: KeyboardInput;

	constructor(player: Player) {
		this._player = player;

		this._keyboardInput = new KeyboardInput();
	}

	public initWASD(): void {
		// REMINDER when customizing controls, save and reuse the generated keymaps
		this._keyboardInput.addKey("w", this.GenKeyMap(MoveDirection.Up));
		this._keyboardInput.addKey("s", this.GenKeyMap(MoveDirection.Down));
		this._keyboardInput.addKey("a", this.GenKeyMap(MoveDirection.Left));
		this._keyboardInput.addKey("d", this.GenKeyMap(MoveDirection.Right));
	}

	private GenKeyMap(direction: MoveDirection): KeyMap {
		return {
			down: (): void => {
				this._player.eventManager.invoke(EventName.PlayerController_MoveStart, direction);
				// this._player.moveStart(direction);
			},
			up: (): void => {
				this._player.eventManager.invoke(EventName.PlayerController_MoveStop, direction);
				// this._player.moveStop(direction);
			}
		};
	}
}