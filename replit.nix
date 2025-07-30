{ pkgs }: {
	deps = [
   pkgs.nano
  pkgs.psmisc
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}