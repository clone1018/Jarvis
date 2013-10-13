declare module "npm" {

	export interface commands {

		export function install (deps:any, cb:any):void;

	}
	
}
